"use client";

import SkillBadge from "@/components/common/SkillBadge";
import OnboardingStepper from "@/components/onboarding/OnboardingStepper";
import { Button } from "@/components/ui/button";
import { POSOITION_SKILLS_FILTER_GROUPS } from "@/constants/filterOptions";
import { useState } from "react";

const tabOptions = [
  { label: "프론트엔드", value: "프론트엔드" },
  { label: "백엔드", value: "백엔드" },
  { label: "마케팅", value: "마케팅" },
];

const Step2 = () => {
  const [step, setStep] = useState(2);
  const [selectedTab, setSelectedTab] = useState(tabOptions[0].value);
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
    <div className="h-[683px]  p-5 flex flex-col justify-between">
      <div>
        <OnboardingStepper currentStep={step} totalSteps={2} />
        <section className="">
          <div className="mb-7">
            <p className="h4-b text-gray-80">
              병알이님은 <span className="text-primary-3">프론트엔드</span>,{" "}
              <span className="text-primary-3">백엔드</span>,{" "}
              <span className="text-primary-3">마케팅</span> 을 선택해주셨어요.
            </p>
            <p className="h4-b text-gray-80">
              관심있거나 보유하고 있는 스킬을 선택해주세요.
            </p>
          </div>
          <div className="max-w-[534px]">
            <ul className="flex gap-4 pb-2 mb-[22px] body-b" role="tablist">
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
            <ul className="flex flex-wrap gap-3">
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
                        className={`hover:border-primary-3 hover:text-primary-3 cursor-pointer ${
                          isSelected
                            ? "border border-primary-3 text-primary-3 bg-secondary-2"
                            : "bg-white"
                        }`}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </div>
      <div>
        <Button
          className="w-full max-w-[262px] py-[14px] mr-[10px]"
          tone="primary"
        >
          이전
        </Button>
        <Button className="w-full max-w-[262px] py-[14px]" tone="primary">
          다음
        </Button>
      </div>
    </div>
  );
};

export default Step2;
