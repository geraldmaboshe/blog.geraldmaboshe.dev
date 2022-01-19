import React from "react";
import Image from "next/image";
import Link from "next/link";

function HeroPost({ title, intro, long_text, slug, postImage }) {
  return (
    <div>
      <Link href={`${slug}`}>
        <div className="relative w-full h-48 w-full md:h-96">
          <Image
            src={postImage.filename}
            alt={`${title}`}
            layout="fill"
            className="rounded-lg"
          />
        </div>
      </Link>
      <Link href={`${slug}`}>
        <div className="w-full">
          <h1 className="text-3xl font-bold pt-4 pb-4">{title}</h1>
          <p className="pb-4">{intro}</p>
        </div>
      </Link>
    </div>
  );
}

export default HeroPost;
