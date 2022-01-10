import React from "react";
import Image from "next/image";
import blog from "../pages/blog";

function Main({ blok }) {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="mb-16 md:mb-0">
        <Image
          src={blok.profile_picture.filename}
          width="1500"
          height="1500"
          className="rounded-full"
        />
      </div>
      <div className="md:pl-16">
        <p className="text-5xl animate-bounce dark:text-orange-400 text-orange-600">
          {blok.greeting}
        </p>
        <br />
        <p className="text-5xl animate-pulse dark:text-orange-400 text-orange-600">
          {blok.bio}
        </p>
      </div>
    </div>
  );
}

export default Main;
