import type { CollectionEntry } from 'astro:content';
import { useRef, useState } from 'preact/hooks';
import fuzzysort from 'fuzzysort';

type Post = Omit<CollectionEntry<'posts'>['data'], 'tags'> & {
  url: string
  tags: string
}

type fuzzysort = {
  options: Fuzzysort.KeysOptions<Post>;
  results: Fuzzysort.KeysResults<Post>;
  result: Fuzzysort.KeysResult<Post>;
}

export default function SearchPost() {
  const [posts, setPosts] = useState<Post[]>([]);
  const resultsContainer = useRef<HTMLOListElement>(null);
  const messageContainer = useRef<HTMLElement>(null);
  const loading = useRef<boolean>(false);
  const data = useRef<Post[] | null>(null);

  const getHighlight = (result: Fuzzysort.Result) => {
    if (!result) return null;

    return fuzzysort
      .highlight(result, (m) => `<mark>${m}</mark>`)!
      .join('');
  };

  async function onFocus() {
    if (loading.current || data.current) return;

    loading.current = true;

    try {
      const fetched = await fetch('/posts.json');
      data.current = await fetched.json();
      loading.current = false;
    } catch (err) {
      loading.current = false;
    }
  }

  function onInput(e: Event) {
    if (loading.current || !data.current) return;

    const target = e.target as HTMLInputElement;
    const value: string = target.value.replace('#', '');
    const hasValue = Boolean(value.length)

    document.querySelector('#posts')!.classList.toggle('hidden', hasValue);
    resultsContainer.current!.classList.toggle('hidden', !hasValue);

    if (!value.length) return messageContainer.current!.classList.add('hidden');

    const isTag: boolean = target.value.startsWith('#');
    const keys: string[] = isTag
      ? ['tags']
      : ['title', 'description'];

    const options: fuzzysort['options'] = {
      limit: 20,
      threshold: -10000,
      keys
    }

    const results: fuzzysort['results'] = fuzzysort.go<Post>(
      value, data.current, options
    );

    messageContainer.current!.textContent = results.length + ' results found';
    messageContainer.current!.classList.remove('hidden');

    const mapped: Post[] = results.map(
      (result: fuzzysort['result']) => {
        let title: string = result.obj.title;
        let description: string = result.obj.description;
        let tagsString: string = result.obj.tags;

        if (isTag) {
          tagsString = getHighlight(result[0]) ?? tagsString;
        } else {
          title = getHighlight(result[0]) ?? title;
          description = getHighlight(result[1]) ?? description;
        }

        const tags: string = tagsString.split(',')
          .map((tag: string) => `<span>#${tag}</span>`)
          .join('');

        return {
          title,
          description,
          language: result.obj.language,
          thumbnail: result.obj.thumbnail,
          created: result.obj.created,
          tags,
          url: result.obj.url
        };
      }
    );

    setPosts(mapped);
  }

  return (
    <>
      <div class="flex gap-2 items-center text-sm sm:text-base">
        <span>[</span>
        <input
          class="appearance-none bg-transparent outline-0 flex-grow"
          type="search"
          placeholder="search posts | # for tags"
          spellcheck={false}
          onFocus={onFocus}
          onInput={onInput}
        />
        <span>]</span>
        <small ref={messageContainer} class="hidden whitespace-nowrap" />
      </div>
      <ol ref={resultsContainer} class="p-0">
        { posts.map(({ title, description, url, created, thumbnail, tags }) => (
          <li class="my-6 py-2 flex gap-6 justify-between w-full">
            <div class="flex flex-col">
              <p class="mt-0 text-xs sm:text-sm">{created}</p>
              <a class="decoration-none" href={url} target="_self">
                <h1
                  class="my-0 text-lg sm:text-xl"
                  dangerouslySetInnerHTML={{ __html: title }}
                />
              </a>
              <p
                class="mt-2 text-sm sm:text-base"
                dangerouslySetInnerHTML={{ __html: description }}
              />
              <div
                class="my-0 flex flex-wrap gap-x-4 text-sm"
                dangerouslySetInnerHTML={{ __html: tags }}
              />
            </div>
            { thumbnail &&
              <img
                class="my-auto aspect-square object-cover w-[25%]"
                src={'/assets/post/' + thumbnail}
                alt={title + ' thumbnail image'}
                draggable={false}
                width="25%"
                height="100%"
              />
            }
          </li>
        ))
        }
      </ol>
    </>
  );
}
