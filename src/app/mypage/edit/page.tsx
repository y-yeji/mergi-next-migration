import { Button } from "@/components/ui/button";

import DefaultInfomamtion from "./components/DefaultInfomation";
import ProfileIntroduction from "./components/ProfileIntroduction";
import ProfileLink from "./components/ProfileLinks";
import ProfilePositions from "./components/ProfilePositions";
import ProfileSkills from "./components/ProfileSkills";

const Page = () => {
  return (
    <div className="max-w-[1280px] pt-12 pb-[80px] mx-auto">
      <DefaultInfomamtion />
      <div className="w-[1120px] mx-auto p-6 rounded-lg bg-white card-shadow">
        <ProfileIntroduction />
        <ProfileLink />
        <ProfilePositions />
        <ProfileSkills />
      </div>
      <div className="w-[1120px] mx-auto flex items-center justify-end gap-3 mt-10">
        <Button
          className="body-m cursor-pointer"
          variant="small"
          color="disabled2"
        >
          취소
        </Button>
        <Button
          className="body-m cursor-pointer"
          variant="small"
          color="primary"
        >
          저장
        </Button>
      </div>
    </div>
  );
};
export default Page;
