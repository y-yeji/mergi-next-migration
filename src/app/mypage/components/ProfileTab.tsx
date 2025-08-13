"use client";

import Link from "next/link";
import { ChevronDown, LinkIcon } from "lucide-react";
import SkillBadge from "@/components/common/SkillBadge";
import { useState } from "react";

const linkList = [
  "https://github.com/y-yeji/mergi-next-migration",
  "https://github.com/y-yeji/mergi-next-migration",
];

const userSkillMap = {
  프론트엔드: ["React", "TypeScript", "Next.js"],
  백엔드: ["Node.js", "Express", "MongoDB"],
  디자인: ["Figma"],
};

const ProfileTab = () => {
  const [isOpenIntroduce, setIsOpenIntroduce] = useState(true);

  const handleIntroduceToggle = () => {
    setIsOpenIntroduce((prev) => !prev);
  };
  return (
    <div className="pb-10">
      <section className="relative mb-11">
        <div className="mb-[10px]" onClick={handleIntroduceToggle}>
          <button type="button" className="flex items-center gap-[10px]">
            <h3 className="h3-b text-gray-80">자기소개</h3>
            <ChevronDown
              className="text-gray-80 cursor-pointer"
              width={24}
              height={24}
            />
          </button>
        </div>
        <div
          className={`h-auto p-6 body-r text-gray-80 bg-secondary-3 rounded-lg input-shadow ${
            isOpenIntroduce ? "block" : "hidden"
          }`}
        >
          안녕하세요. 2년차 프론트엔드 개발자입니다 :)안녕하세요. 2년차
          프론트엔드 개발자입니다 :)안녕하세요. 2년차 프론트엔드 개발자입니다
          :)안녕하세요. 2년차 프론트엔드 개발자입니다 :)안녕하세요. 2년차
          프론트엔드 개발자입니다 :)안녕하세요. 2년차 프론트엔드 개발자입니다
          :)안녕하세요. 2년차 프론트엔드 개발자입니다 :)안녕하세요. 2년차
          프론트엔드 개발자입니다 :)안녕하세요. 2년차 프론트엔드 개발자입니다
          :)안녕하세요. 2년차 프론트엔드 개발자입니다 :)안녕하세요. 2년차
          프론트엔드 개발자입니다 :)안녕하세요. 2년차 프론트엔드 개발자입니다
          :)안녕하세요. 2년차 프론트엔드 개발자입니다 :)안녕하세요. 2년차
          프론트엔드 개발자입니다 :)안녕하세요. 2년차 프론트엔드 개발자입니다
          :)안녕하세요. 2년차 프론트엔드 개발자입니다 :)안녕하세요. 2년차
          프론트엔드 개발자입니다 :)안녕하세요. 2년차 프론트엔드 개발자입니다
          :)안녕하세요. 2년차 프론트엔드 개발자입니다 :)안녕하세요. 2년차
          프론트엔드 개발자입니다 :)안녕하세요. 2년차 프론트엔드 개발자입니다
          :)안녕하세요. 2년차 프론트엔드 개발자입니다 :)안녕하세요. 2년차
          프론트엔드 개발자입니다 :)안녕하세요. 2년차 프론트엔드 개발자입니다
          :)안녕하세요. 2년차 프론트엔드 개발자입니다 :)안녕하세요. 2년차
          프론트엔드 개발자입니다 :)안녕하세요. 2년차 프론트엔드 개발자입니다 :)
        </div>
      </section>
      <section className="mb-11">
        <h3 className="mb-[10px] h3-b text-gray-80">링크</h3>
        <ul>
          {linkList.map((linkListItem, index) => (
            <li
              key={`${linkListItem}-${index}`}
              className="w-full h-8 flex items-center gap-[19px] py-[5.5px] px-[15px] mb-[10px] bg-secondary-3"
            >
              <LinkIcon width={22} height={22} className="text-gray-80" />
              <Link
                href={linkListItem}
                className="body-r text-black"
                target="_blank"
                rel="noopener noreferrer"
              >
                {linkListItem}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h3 className="mb-[10px] h3-b text-gray-80">포지션 & 스킬</h3>
        <div className="p-7 rounded-lg bg-secondary-3 input-shadow">
          {Object.entries(userSkillMap).map(([position, skills]) => (
            <ul key={position} className="mb-7">
              <h4 className="body-large-m text-gray-80 mb-3">{position}</h4>
              <li className="flex gap-4">
                {skills.map((skill) => (
                  <SkillBadge key={skill} name={skill} skill={skill} />
                ))}
              </li>
            </ul>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProfileTab;
