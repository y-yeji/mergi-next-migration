import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Bell, PencilLine } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-20 w-full h-[80px] py-[21px] px-10">
      <nav className="max-w-[1200px] mx-auto flex items-center justify-between">
        <div className="flex flex-1 mr-[250px]">
          <Link href="/" className="px-[22px] mr-[100px]">
            <Image src="logo.svg" alt="mergi 로고" width={96} height={36} />
          </Link>
          <ul className="flex flex-1 items-center justify-between h3-b">
            <li>
              <Link href="/study">스터디</Link>
            </li>
            <li>
              <Link href="/project">프로젝트</Link>
            </li>
            <li>
              <Link href="/service">서비스</Link>
            </li>
          </ul>
        </div>
        {/* 로그인 */}
        <div>
          <ul className="flex items-center justify-between gap-6">
            <li>
              <Link href="/" className="group relative">
                <PencilLine
                  className="text-gray-70 group-hover:text-primary-4 transition-colors"
                  size={24}
                />
                <span
                  className="absolute z-10 left-1/2 top-full -translate-x-1/2 hidden group-hover:flex
      min-w-[50px] h-5 mt-1 px-0.5 text-center rounded-sm caption-r
      bg-primary-4 text-white transition-opacity items-center justify-center"
                >
                  작성하기
                </span>
              </Link>
            </li>
            <li>
              <Link href="/" className="group relative">
                <Bell
                  className="text-gray-70 group-hover:text-primary-4 transition-colors"
                  size={28}
                />
                <span
                  className="absolute left-1/2 top-full -translate-x-1/2 hidden group-hover:flex
      min-w-[50px] h-5 mt-1 px-0.5 text-center rounded-sm caption-r
      bg-primary-4 text-white transition-opacity items-center justify-center"
                >
                  알림
                </span>
              </Link>
            </li>
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className="group size-[40px] cursor-pointer">
                    <AvatarImage
                      src="default-user-image.svg"
                      className="object-cover"
                    />
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className={cn(
                    "min-w-0 h-16 body-r px-4 py-1.5 bg-secondary-3 overflow-visible"
                  )}
                  style={{ boxShadow: "0px 0px 3px 0px rgba(0,0,0,0.11)" }}
                  align="end"
                >
                  <DropdownMenuItem
                    className={cn("p-0 pb-[10px] justify-center")}
                  >
                    <Link href="#">마이페이지</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className={cn("p-0 justify-center")}>
                    <button>로그아웃</button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
          </ul>
        </div>
        {/* 로그아웃 */}
        <div className="items-center">
          <Button
            asChild
            className="w-[66px] h-8 px-3 h4-b bg-white border-[1.5px] border-primary-4 rounded-[50px] text-primary-3"
            style={{ backgroundColor: "transparent" }}
          >
            <Link href="#">로그인</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
