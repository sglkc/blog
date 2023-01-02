import type { ExtractedPost } from '@/types/Post';
import { useRef, useState } from 'preact/hooks';
import fuzzysort from 'fuzzysort';
import PostPreview from './PostPreview';

type fuzzysort = {
  options: Fuzzysort.KeysOptions<ExtractedPost>;
  results: Fuzzysort.KeysResults<ExtractedPost>;
  result: Fuzzysort.KeysResult<ExtractedPost>;
}

type Props = {
  main: string;
};

export default function SearchPost({ main }: Props) {
  const [message, _setMessage] = useState<string | false>(false);
  const [posts, setPosts] = useState<ExtractedPost[]>([]);
  const resultDiv = useRef<HTMLDivElement>(null);
  const loading = useRef<boolean>(false);
  const data = useRef<ExtractedPost[] | null>(null);
  const mainDiv = document.getElementById(main);

  const setMessage = (message: string | false) => {
    _setMessage(message);

    if (message) mainDiv!.style.display = 'none';
    else mainDiv!.style.display = '';
  };

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

    if (!value.length) return setMessage(false);

    const isTag: boolean = target.value.startsWith('#');
    const keys: string[] = isTag
      ? ['tags']
      : ['title', 'description'];

    const options: fuzzysort['options'] = {
      limit: 20,
      threshold: -10000,
      keys
    }

    const results: fuzzysort['results'] = fuzzysort.go<ExtractedPost>(
      value, data.current, options
    );

    setMessage(results.length + ' results found');

    const mapped: ExtractedPost[] = results.map(
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
    <section>
      <div class="background flex gap-2 sticky top-10 pt-2 sm:pt-4 pb-2 -mt-4">
        <span class="my-0">[</span>
        <input
          class="bg-transparent outline-0 flex-grow py-2 -my-2 min-w-[0]"
          type="text"
          placeholder="search posts | # for tags"
          spellcheck={false}
          onFocus={onFocus}
          onInput={onInput}
        />
        <span class="my-0">]</span>
        { message &&
          <small class="my-auto whitespace-nowrap">{ message }</small>
        }
      </div>
      { message &&
        <div ref={resultDiv}>
          { posts.map((post: ExtractedPost) => <PostPreview {...post} />) }
        </div>
      }
    </section>
  );
}
