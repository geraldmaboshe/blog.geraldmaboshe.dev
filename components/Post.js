import React from "react";
import Image from "next/image";
import Link from "next/link";

function Post({ title, slug, coverImage }) {
  return (
    <div>
      <Link href={`${slug}`}>
        <div className="relative w-full h-48">
          <Image
            src={
              coverImage ? coverImage : "https://via.placeholder.com/400x300"
            }
            alt={`${title}`}
            layout="fill"
            className="rounded-lg"
          />
        </div>
      </Link>
      <div className="relative w-full h-48">
        <Link href={`${slug}`}>
          <p className="text-xl font-bold pt-4 pb-16">{title}</p>
        </Link>
      </div>
    </div>
  );
}

export default Post;
