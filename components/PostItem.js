import ReactMarkdown from "react-markdown";

function PostItem({ title, intro }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{intro}</p>
    </div>
  );
}

export default PostItem;
