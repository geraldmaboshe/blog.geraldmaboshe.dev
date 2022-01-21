import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { useTheme } from "next-themes";
import moment from "moment";
import Head from "next/head";

function SelectedPost({ post }) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
      <Head>
        <title>{post?.content?.title}</title>
      </Head>
      <div className="flex">
        <div className="md:w-3/4 w-full">
          <div className="relative w-full h-48 w-full md:h-112">
            <Image
              src={
                post?.content?.postImage?.filename
                  ? post?.content.postImage?.filename
                  : "https://via.placeholder.com/400x300"
              }
              alt={`${post?.title ? post?.title : post?.content?.title}`}
              layout="fill"
              className="rounded-lg"
              placeholder="blur"
              blurDataURL={`data:image/jpeg;base64,${post.content.blur_hash}`}
            />
          </div>
          <h1 className="text-3xl font-bold pt-4 pb-4">
            {post?.content?.title}
          </h1>

          <div className="flex mb-4">
            <Image
              src="/me.jpeg"
              alt="me"
              width="64"
              height="64"
              className="rounded-full"
            />
            <div className="space-y-2 pl-4">
              <div className="space-y-0.5">
                <p className="text-lg font-semibold">Gerald Maboshe</p>
                <p className="text-slate-500 font-medium">
                  Published on {moment(post.published_at).format("ll")}
                </p>
              </div>
            </div>
          </div>

          <div className="prose lg:prose-xl dark:prose-invert">
            <ReactMarkdown>
              {post.content?.long_text
                ? post.content.long_text
                : post.body_markdown}
            </ReactMarkdown>
          </div>
        </div>

        <ul className="hidden md:flex md:mx-auto md:justify-between">
          <li className="p-4">
            <Link href="https://twitter.com/geraldmaboshe">
              <AiOutlineTwitter size={30} color="#1DA1F2" />
            </Link>
          </li>
          <li className="p-4">
            <Link href="https://github.com/geraldMaboshe">
              <AiFillGithub
                size={30}
                color={theme == "light" ? "#171515" : "#ffffff"}
              />
            </Link>
          </li>
          <li className="p-4">
            <Link href="https://www.linkedin.com/in/geraldmaboshe">
              <AiFillLinkedin size={30} color="#0072b1" />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SelectedPost;
