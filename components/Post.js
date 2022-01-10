import Image from "next/image";
import Link from "next/link";
import React from "react";

function Post({ title, postImage, intro, slug }) {
  console.log(slug);
  return (
    <div>
      {postImage.filename && (
        <Link href={slug}>
          <Image src={postImage?.filename} width="1000" height="800" />
        </Link>
      )}
      <Link href={slug}>
        <h1 className="text-2xl">{title}</h1>
      </Link>
      <p>{intro}</p>
    </div>
  );
}

export default Post;
