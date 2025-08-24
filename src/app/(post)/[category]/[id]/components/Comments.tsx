"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVertical } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const mockCommentsData = [
  {
    id: 1,
    userName: "병알이",
    date: "2025.01.15",
    content:
      "React 말고 Next.js는 관심이 없으실까요? 그리고 연휴 기간에는 어떤 방식으로 프로젝트를 진행하실 예정인지 궁금해요!",
  },
  {
    id: 2,
    userName: "병알이",
    date: "2025.01.16",
    content:
      "React 말고 Next.js는 관심이 없으실까요? 그리고 연휴 기간에는 어떤 방식으로 프로젝트를 진행하실 예정인지 궁금해요!",
  },
  {
    id: 3,
    userName: "병알이",
    date: "2025.01.16",
    content:
      "React 말고 Next.js는 관심이 없으실까요? 그리고 연휴 기간에는 어떤 방식으로 프로젝트를 진행하실 예정인지 궁금해요!",
  },
];

const Comments = () => {
  const [openStates, setOpenStates] = useState<{ [key: number]: boolean }>({});

  const handleOpenChange = (id: number, isOpen: boolean) => {
    setOpenStates((prev) => ({
      ...prev,
      [id]: isOpen,
    }));
  };

  return (
    <section className="pt-[41px]">
      <form className="mb-8">
        <p className="h4-b text-gray-80">4개의 댓글</p>
        <label htmlFor="comment-input" className="sr-only">
          댓글 입력
        </label>
        <textarea
          name=""
          id="comment-input"
          placeholder="댓글을 입력해주세요."
          className="w-full py-3 px-4 mb-2 body-r placeholder:text-gray-40 focus:placeholder-transparent rounded-lg input-shadow"
        ></textarea>
        <div className="flex justify-between items-start">
          <span className="caption-r text-gray-50">1/100</span>
          <Button
            variant="custom"
            className="w-[69px] h-[26px] py-1 px-3 rounded-sm caption-r cursor-pointer"
            color="primary"
          >
            댓글 등록
          </Button>
        </div>
      </form>
      {mockCommentsData.map((commentList) => (
        <article key={commentList.id} className="mb-7 pb-5 border-b">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-[10px]">
              <Avatar className="group size-[44px] cursor-pointer">
                <AvatarImage
                  src="/images/default-user-image.svg"
                  className="object-cover"
                  alt="유저프로필이미지"
                />
              </Avatar>
              <div className="flex flex-col">
                <span className="body-b text-gray-80">
                  {commentList.userName}
                </span>
                <span className="caption-r text-gray-50">
                  {commentList.date}
                </span>
              </div>
            </div>
            <div>
              <DropdownMenu
                open={openStates[commentList.id] || false}
                onOpenChange={(isOpen) =>
                  handleOpenChange(commentList.id, isOpen)
                }
              >
                <DropdownMenuTrigger asChild className="focus-visible:ring-0">
                  <Button type="button" className="cursor-pointer">
                    <EllipsisVertical size={24} className="text-gray-80" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className={cn(
                    "absolute top-2 -left-2 w-[82px] h-[60px] caption-m px-2 py-1 bg-secondary-2 overflow-visible rounded-sm"
                  )}
                  style={{
                    width: "82px",
                    height: "60px",
                    boxShadow: "0 0 3px 0 rgba(0,0,0,0.11)",
                  }}
                >
                  <DropdownMenuItem
                    className={cn(
                      "p-0 mb-2 justify-center text-gray-80 hover:text-primary-3"
                    )}
                  >
                    <Button size="custom" className="cursor-pointer">
                      댓글 수정하기
                    </Button>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={cn(
                      "p-0 justify-center text-gray-80 hover:text-primary-3"
                    )}
                  >
                    <Button size="custom" className="cursor-pointer">
                      댓글 삭제하기
                    </Button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <p className="body-large-r text-gray-80">{commentList.content}</p>
        </article>
      ))}
    </section>
  );
};

export default Comments;
