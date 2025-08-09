"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import SkillBadge from "../common/SkillBadge";
import { POSOITION_SKILLS_FILTER_GROUPS } from "@/constants/filterOptions";

const tabOptions = [
  { label: "전체", value: "전체" },
  { label: "PM/기획/마케팅", value: "PM/기획/마케팅" },
  { label: "디자인", value: "디자인" },
  { label: "프론트엔드", value: "프론트엔드" },
  { label: "백엔드", value: "백엔드" },
  { label: "모바일", value: "모바일" },
  { label: "데브옵스", value: "데브옵스" },
];

interface SkillsFilterSelectboxProps {
  isOpen: boolean;
  onToggle: (e: React.MouseEvent) => void;
}

const SkillsFilterSelectbox = ({
  isOpen,
  onToggle,
}: SkillsFilterSelectboxProps) => {
  const [selectedTab, setSelectedTab] = useState("전체");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const handleTabClick = (value: string) => {
    setSelectedTab(value);
  };

  const handleSkillClick = (skill: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skill)
        ? prev.filter((skillName) => skillName !== skill)
        : [...prev, skill]
    );
  };

  const skillList = POSOITION_SKILLS_FILTER_GROUPS[selectedTab] || [];

  return (
    <div className="relative" onClick={(e) => e.stopPropagation()}>
      {/* 토글 버튼 */}
      <button
        type="button"
        className={`flex justify-between items-center w-[140px] h-9 py-1 pl-3 pr-[6px] mb-1 body-r rounded-lg input-shadow cursor-pointer
          ${
            selectedSkills.length > 0
              ? "text-primary-3 border border-primary-3 bg-white"
              : "text-gray-50 border border-transparent bg-white"
          }
        `}
        onClick={onToggle}
      >
        <span className="line-clamp-1">
          {selectedSkills.length > 0 ? selectedSkills.join(", ") : "기술 스택"}
        </span>
        <ChevronDown
          width={24}
          hanging={24}
          className={`flex-shrink-0 ${
            selectedSkills.length > 0 ? "text-gray-50" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute w-[713px] px-4 pt-2 pb-3 body-r text-gray-50 bg-white rounded-lg input-shadow z-10">
          {/* 탭 영역 */}
          <ul className="flex gap-4 border-b pb-2 mb-4" role="tablist">
            {tabOptions.map((tab) => (
              <li key={tab.value}>
                <button
                  type="button"
                  className={`cursor-pointer ${
                    selectedTab === tab.value
                      ? "text-primary-3 border-b-2 border-primary-3"
                      : ""
                  }`}
                  onClick={() => handleTabClick(tab.value)}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>

          {/* 현재 탭의 스킬 리스트 */}
          <ul className="flex flex-wrap gap-2">
            {skillList.map((skill) => {
              const isSelected = selectedSkills.includes(skill);
              return (
                <li key={skill}>
                  <button
                    type="button"
                    onClick={() => handleSkillClick(skill)}
                    className="w-full"
                  >
                    <SkillBadge
                      name={skill}
                      skill={skill}
                      className={
                        isSelected
                          ? "border border-primary-3 text-primary-3 bg-secondary-2"
                          : "bg-white"
                      }
                    />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SkillsFilterSelectbox;
