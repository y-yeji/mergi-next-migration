"use client";

import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import { useState } from "react";

const DefaultInfomamtion = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <section className="w-[1120px] h-[319px] mx-auto p-6 mb-10 rounded-lg bg-white card-shadow">
        <h2 className="h2-b">기본 정보</h2>
        <div className="flex justify-center items-center gap-[96px]">
          <div className="relative group w-[190px] h-[190px]">
            <Image
              src="/images/default-user-image.svg"
              alt="유저 기본 프로필 이미지"
              width={190}
              height={190}
              className="w-full h-full object-cover rounded-full"
            />
            <div
              className={`
      absolute inset-0 flex items-center justify-center rounded-full bg-black/70
      opacity-0 group-hover:opacity-100 transition cursor-pointer
      ${open ? "opacity-100" : ""}
    `}
            >
              <DropdownMenu open={open} onOpenChange={setOpen}>
                <DropdownMenuTrigger asChild>
                  <button type="button" className="cursor-pointer">
                    <Pencil size={24} className="text-white drop-shadow" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className={cn(
                    "absolute -top-13 left-8 body-r px-4 py-1.5 bg-secondary-3 overflow-visible rounded-sm input-shadow"
                  )}
                  style={{ boxShadow: "0 0 3px 0 rgba(0,0,0,0.11)" }}
                >
                  <DropdownMenuItem
                    className={cn(
                      "p-0 justify-center hover:text-primary-3 mb-[10px]"
                    )}
                  >
                    <label
                      htmlFor="profile-image-upload"
                      className="cursor-pointer w-full text-center"
                    >
                      이미지 변경하기
                      <input
                        type="file"
                        id="profile-image-upload"
                        className="hidden"
                        accept="image/*"
                      />
                    </label>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={cn("p-0 justify-center hover:text-primary-3")}
                  >
                    <button className="cursor-pointer">이미지 삭제하기</button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div>
            <div className="mb-6">
              <p className="mb-[10px] h4-b text-gray-80">
                닉네임을 입력해주세요.
              </p>
              <div className="w-[646px] flex flex-col gap-1">
                <div className="relative">
                  <input
                    className="w-full h-[46px] pl-[18px] py-2 pr-2 bg-white rounded-lg input-shadow placeholder:text-gray-40 focus:placeholder-transparent body-r"
                    type="text"
                    placeholder="닉네임"
                  />
                  <Button
                    variant="small"
                    color="primary"
                    className="absolute top-[7px] left-[573px] caption-r cursor-pointer"
                  >
                    중복확인
                  </Button>
                </div>
                <p className="w-full flex justify-between items-center caption-r text-gray-50">
                  <span>중복된 이름ㆍ특수문자 사용불가</span>
                  <span>1/10</span>
                </p>
              </div>
            </div>
            <div>
              <p className="mb-[10px] h4-b text-gray-80">
                간단하게 본인을 소개해주세요.
              </p>
              <input
                className="max-w-full w-[646px] h-[46px] pl-[18px] py-2 pr-2 mb-1 bg-white rounded-lg input-shadow placeholder:text-gray-40 focus:placeholder-transparent body-r"
                type="text"
                name=""
                placeholder="한 줄 소개"
              />
              <p className="caption-r text-gray-50 text-right">1/20</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DefaultInfomamtion;
