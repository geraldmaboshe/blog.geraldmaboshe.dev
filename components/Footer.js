import React, { Component } from "react";
import Link from "next/link";

export function Footer() {
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

  return (
    <div className="bg-yellow dark:bg-red">
      <div className="text-center">
        <ul className="flex items-center justify-center">
          <li className="p-1">
            <Link href="https://github.com/geraldMaboshe">GitHub</Link>
          </li>
          <li className="p-1">
            <Link href="https://twitter.com/geraldmaboshe">Twitter</Link>
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
