import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function MarkdownText({ content }) {
  return (
    <section className="prose  dark:prose-invert py-6 dark:bg-black dark:text-gray-50 ">
      <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
    </section>
  );
}
