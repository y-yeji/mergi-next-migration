"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  const showFooter =
    pathname === "/" || pathname === "/study" || pathname === "/project";

  if (!showFooter) return null;

  return (
    <footer className="w-full h-32 py-5 bg-gray-5">
      <Link
        href="https://github.com/y-yeji/mergi-next-migration"
        className="flex justify-center gap-[10px] mb-5 body-b text-gray-50"
      >
        <Image
          src="/images/github_gray.svg"
          alt="깃허브 로고"
          width={24}
          height={24}
        />
        mergi-next-migration
      </Link>
      <ul className="flex justify-center gap-[10px] mb-2 caption-m text-gray-50">
        <li>
          <Link href="https://github.com/y-yeji">y-yeji</Link>
        </li>
        <span>|</span>
        <li>
          <Link href="https://github.com/Jeon-HyeongJoon">Jeon-HyeongJoon</Link>
        </li>
      </ul>
      <small className="flex justify-center caption-r text-gray-40">
        Created with passion by yeji and hyeongjoon | © 2025 yeji and hyeongjoon
      </small>
    </footer>
  );
};

export default Footer;
