"use client";

import BasicInfo from "@/app/(post)/new/components/BasicInfo";
import ProjectContentEditor from "@/app/(post)/new/components/ProjectContentEditor";
import ProjectImage from "@/app/(post)/new/components/ProjectImage";
import { Button } from "@/components/ui/button";

const Page = () => {
  return (
    <div className="pt-[42px] pb-20 px-10">
      <BasicInfo />
      <ProjectImage />
      <ProjectContentEditor />
      <div className="w-[1120px] mx-auto flex justify-end items-center ">
        <Button
          tone="secondary"
          className="w-[49px] h-9 py-[6px] px-3 body-m rounded-sm cursor-pointer"
        >
          취소
        </Button>
        <Button
          tone="primary"
          className="ml-3 w-[64px] h-9 py-[6px] px-3 body-m rounded-sm cursor-pointer"
        >
          글 등록
        </Button>
      </div>
    </div>
  );
};

export default Page;
