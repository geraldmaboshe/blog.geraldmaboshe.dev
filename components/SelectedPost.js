import React from "react";
import Image from "next/image";
import { render } from "storyblok-rich-text-react-renderer";

function SelectedPost({ title, intro, long_text, postImage }) {
  console.log("long text", long_text);
  return (
    <div>
      <h1>{title}</h1>
      <Image src={postImage.filename} width="1000" height="800" />
      <p>{render(long_text)}</p>
    </div>
  );
}

export default SelectedPost;
