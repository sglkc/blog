import type { ExtractedPost } from "@/types/Post";

export default function PostPreview(props: ExtractedPost) {
  const { url, title, description, created, tags } = props;

  return (
    <div class="my-6 py-2 flex flex-col gap-4">
      <p class="my-0 text-sm -mb-2">{ created }</p>
      <a
        class="text-xl font-semibold my-0"
        href={url}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <h4
        class="font-light my-0 text-sm sm:text-base"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <div
        class="flex flex-wrap gap-x-4 text-sm"
        dangerouslySetInnerHTML={{ __html: tags }}
      />
    </div>
  );
}
