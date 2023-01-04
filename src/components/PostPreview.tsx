import type { ExtractedPost } from "@/types/Post";

export default function PostPreview(props: ExtractedPost) {
  const { url, title, description, created, thumbnail, tags } = props;

  return (
    <div class="my-6 py-2 flex gap-6 justify-between w-full">
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
    </div>
  );
}
