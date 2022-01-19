import React from "react";
import Image from "next/image";
import Link from "next/link";

function MinorHeroPost({ title, slug, postImage }) {
  return (
    <div>
      <Link href={`${slug}`}>
        <div className="relative w-full h-48">
          <Image
            src={postImage ? postImage : "https://via.placeholder.com/300"}
            alt={`${title}`}
            layout="fill"
            className="rounded-lg"
          />
        </div>
      </Link>
      <Link href={`${slug}`}>
        <p className="text-xl font-bold pt-4 pb-4">{title}</p>
      </Link>
    </div>
  );
}

export default MinorHeroPost;
