import React from "react";
import Image from "next/image";
import Link from "next/link";

function MinorHeroPost({ title, slug, postImage, blur_hash }) {
  return (
    <div>
      <Link href={`${slug}`}>
        <div className="relative w-full h-48">
          <Image
            src={
              postImage
                ? postImage.filename
                : "https://via.placeholder.com/400x300"
            }
            alt={`${title}`}
            layout="fill"
            className="rounded-lg"
            placeholder="blur"
            blurDataURL={`data:image/jpeg;base64,${blur_hash}`}
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
