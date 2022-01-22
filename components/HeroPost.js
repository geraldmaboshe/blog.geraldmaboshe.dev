import React from "react";
import Image from "next/image";
import Link from "next/link";

function HeroPost({ title, intro, slug, postImage, blur_hash }) {
  return (
    <div>
      <Link href={`${slug}`}>
        <div className="relative w-full h-48 w-full md:h-96">
          <Image
            src={
              postImage?.filename
                ? postImage.filename
                : "https://via.placeholder.com/400x300"
            }
            alt={`${title}`}
            layout="fill"
            className="rounded-lg"
            blurDataURL={`data:image/jpeg;base64,${blur_hash}`}
            placeholder="blur"
          />
        </div>
      </Link>
      <Link href={`${slug}`}>
        <div className="w-full">
          <h1 className="text-3xl font-bold pt-4 pb-4">{title}</h1>
          <p className="pb-16 lg:prose-xl">{intro}</p>
        </div>
      </Link>
    </div>
  );
}

export default HeroPost;
