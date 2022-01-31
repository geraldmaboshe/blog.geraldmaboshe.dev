import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { useTheme } from "next-themes";

export function Footer() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const date = new Date();
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="mt-12 text-lg text-center">
      <div>
        <p>
          If you have any questions, feedback or suggestions, please feel free
          to contact me on{" "}
          <span className="underline">
            <Link href="https://twitter.com/geraldmaboshe">Twitter</Link>
          </span>
        </p>
        <p>
          If you like my content, please consider supporting me by{" "}
          <span className="underline">
            <Link href="https://ko-fi.com/geraldmaboshe">
              buying me a coffee
            </Link>
          </span>
        </p>
      </div>
      <div className="text-center mb-4 mt-4">
        <ul className="flex items-center justify-center gap-px">
          <li className="p-1">
            <Link href="https://twitter.com/geraldmaboshe">
              <AiOutlineTwitter size={30} color="#1DA1F2" />
            </Link>
          </li>
          <li className="p-1">
            <Link href="https://github.com/geraldMaboshe">
              <AiFillGithub
                size={30}
                color={theme == "light" ? "#171515" : "#ffffff"}
              />
            </Link>
          </li>
          <li className="p-1">
            <Link href="https://www.linkedin.com/in/geraldmaboshe">
              <AiFillLinkedin size={30} color="#0072b1" />
            </Link>
          </li>
        </ul>
      </div>
      <div className="text-center">
        <p>Happy {weekDays[date.getDay()]}!</p>
      </div>
      <div className="text-center">
        <p>&copy; {date.getFullYear()}. Gerald Maboshe</p>
      </div>
    </div>
  );
}

export default Footer;
