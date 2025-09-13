import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import Link from "next/link";
import PositionBadge from "./PositionBadge";
import { XIcon } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const UserProfileModal = () => {
  return (
    <div className="min-h-screen mt-[100px] mx-auto flex justify-center items-center bg-white card-shadow">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Open Dialog</Button>
        </DialogTrigger>

        <DialogContent
          showCloseButton={false}
          className="box-border px-[37px] pt-[35px] pb-[30px] rounded-[20px] sm:max-w-[425px]"
        >
          <DialogClose asChild>
            <button className="absolute top-5 right-5 text-gray-50 cursor-pointer">
              <XIcon className="size-7" />
            </button>
          </DialogClose>

          <DialogHeader>
            <VisuallyHidden>
              <DialogTitle>유저 프로필</DialogTitle>
              <DialogDescription>
                유저의 기본 정보와 역할을 보여주는 모달
              </DialogDescription>
            </VisuallyHidden>
            <section className="flex flex-col justify-center items-center gap-[14px] mb-[38px]">
              <Image
                src="/images/default-user-image.svg"
                alt="유저프로필이미지"
                width={120}
                height={120}
                className="rounded-full"
              />
              <div className="text-center">
                <h2 className="mb-[14px] h2-b text-black">병알이</h2>
                <PositionBadge className="mb-[14px] flex justify-center gap-[10px]" />
                <p className="body-large-r text-gray-80">
                  안녕하세요. 2년차 프론트엔드 개발자입니다 :)
                </p>
              </div>
            </section>
          </DialogHeader>
          <Link href="/userpage">
            <Button className="w-full py-3 body-r cursor-pointer" tone="modal">
              유저 페이지로 이동하기
            </Button>
          </Link>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UserProfileModal;
