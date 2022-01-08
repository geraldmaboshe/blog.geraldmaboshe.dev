import React from "react";
import Link from "next/link";

function Navigation() {
  return (
    <nav>
      <ul className="flex">
        <li className="grow">
          <Link href="/">Gerald Maboshe</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li className="pl-8">
          <Link href="https://github.com/geraldMaboshe">GitHub</Link>
        </li>
        <li className="pl-8">
          <Link href="https://twitter.com/geraldmaboshe">Twitter</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
