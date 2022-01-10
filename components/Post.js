import Image from "next/image";
import Link from "next/link";
import React from "react";

function Post({ title, coverImage, intro, slug }) {
  console.log(slug);
  return (
    <div>
      {coverImage.filename && (
        <Link href={slug}>
          <Image src={coverImage.filename} width="1000" height="800" />
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
