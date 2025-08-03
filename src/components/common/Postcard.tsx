import { AvatarImage } from "@radix-ui/react-avatar";
import { Avatar } from "../ui/avatar";
import { Bookmark, ThumbsUp } from "lucide-react";
import { Badge } from "../ui/badge";
import { SKILLS } from "@/constants/skills";
import SkillLogo from "./SkillLogo";
import { POSITION } from "@/constants/position";

const Postcard = () => {
  const MAX_VISIBLE_SKILLS = 5;
  const MAX_VISIBLE_POSITION = 2;

  const remainingSkillsCount = () =>
    Math.max(SKILLS.length - MAX_VISIBLE_SKILLS, 0);

  const remainingPositionCount = () =>
    Math.max(POSITION.length - MAX_VISIBLE_POSITION, 0);

  return (
    <div className="w-full max-w-[258px] h-[295px] p-6 border rounded-lg bg-white input-shadow duration-300 cursor-pointer card-shadow">
      <div className="flex justify-between mb-[15px]">
        <span className="flex items-center gap-[10px]">
          <span>
            <Avatar className="group size-[40px] cursor-pointer">
              <AvatarImage
                src="default-user-image.svg"
                className="object-cover"
                alt="유저프로필이미지"
              />
            </Avatar>
          </span>
          <span className="body-b">파파고</span>
        </span>
        <span className="flex items-center gap-[6px]">
          <span>
            <ThumbsUp size={24} className="text-gray-50" />
          </span>
          <span>
            <Bookmark size={24} className="text-gray-50" />
          </span>
        </span>
      </div>
      <div>
        <div className="mb-4">
          <p className="body-large-r line-clamp-3">
            멋진프로젝트를 만들어봅시다 주제는 파파고 api를 이용한 어쩌고입니다
            모집합니다모집합니다모집합니다모집... 모집...
          </p>
        </div>
        <div className="mb-[10px]">
          <ul className="flex items-center gap-1 mb-[13px]">
            {SKILLS.slice(0, 5).map((skill) => (
              <li key={skill.skill}>
                <SkillLogo name={skill.name} skill={skill.skill} />
              </li>
            ))}
            <li className="w-7 h-7 rounded-full flex items-center justify-center border border-solid border-primary-3 caption-b text-primary-3 bg-white">
              +{remainingSkillsCount()}
            </li>
          </ul>
          <ul className="flex gap-[5px] mb-[10px]">
            {POSITION.slice(0, 2).map((position) => (
              <li key={position}>
                <Badge variant="position">{position}</Badge>
              </li>
            ))}
            <li className="py-[3px] px-2.5 bg-gray-5 text-primary-2 rounded-md caption-b">
              +{remainingPositionCount()}
            </li>
          </ul>
        </div>
      </div>
      <span className="caption-r text-gray-50">
        마감일 | <span>2025.08.02</span>
      </span>
    </div>
  );
};
export default Postcard;
