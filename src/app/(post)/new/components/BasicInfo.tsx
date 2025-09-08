import FilterSelectbox from "@/components/common/FilterSelectbox";
import PositionSmallButton from "@/components/common/PositionSmallButton";
import SkillBadge from "@/components/common/SkillBadge";
import {
  CONTACT_METHOD,
  MODE_TYPE,
  RECRUITMENT_TYPE,
  REGION,
} from "@/constants/filterOptions";
import { POSITION_SKILLS } from "@/constants/position";
import React, { useState } from "react";
import { DateRange } from "react-day-picker";
import { Input } from "@/components/ui/input";
import FormField from "./FormField";
import DateRangeInput from "./DateRangeInput";

const BasicInfo = () => {
  const [selectedPositions, setSelectedPositions] = useState<string[]>([]);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [projectRange, setProjectRange] = React.useState<DateRange | undefined>(
    undefined
  );
  const [recruitRange, setRecruitRange] = React.useState<DateRange | undefined>(
    undefined
  );
  const [calendarOpen, setCalendarOpen] = useState({
    project: false,
    recruit: false,
  });

  const skillList = [
    ...new Set(
      selectedPositions
        .map((position) => POSITION_SKILLS[position] || [])
        .flat()
    ),
  ];

  const handleSkillClick = (skill: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skill)
        ? prev.filter((skillName) => skillName !== skill)
        : [...prev, skill]
    );
  };

  const toggleProjectCalendar = () => {
    setCalendarOpen((prev) => ({ ...prev, project: !prev.project }));
  };

  const toggleRecruitCalendar = () => {
    setCalendarOpen((prev) => ({ ...prev, recruit: !prev.recruit }));
  };

  return (
    <section className="w-[1120px] mx-auto mb-10 py-9 px-6 shadow-[0px_0px_8px_rgba(0,0,0,0.11)] rounded-lg bg-white">
      <h2 className="flex items-center h2-b mb-11">
        <div className="w-6 h-6 mr-4 rounded-full bg-primary-2 h4-b text-white text-center align-middle">
          1
        </div>
        프로젝트 시작을 위해 기본 정보를 입력해주세요
      </h2>
      <div className="grid grid-cols-2 gap-x-10 gap-y-7 mb-7">
        <FormField label="모집 구분" required>
          <FilterSelectbox
            filterTitle="모집 구분을 선택해주세요"
            filterList={RECRUITMENT_TYPE}
            filterSelectType="long"
            disableSelectedStyle={true}
            triggerClassName="text-gray-80 border-none [_svg]:text-gray-40"
          />
        </FormField>
        <FormField label="모집 인원" required>
          <Input
            customType="long"
            type="text"
            name=""
            id=""
            placeholder="모집 인원을 입력해주세요"
          />
        </FormField>
        <FormField label="모집 지역" required>
          <FilterSelectbox
            filterTitle="모집 지역을 선택해주세요"
            filterList={REGION}
            filterSelectType="long"
            disableSelectedStyle={true}
            triggerClassName="text-gray-80 border-none"
          />
        </FormField>
        <DateRangeInput
          label="진행 기간"
          placeholder="진행 기간을 입력해주세요"
          range={projectRange}
          onToggle={toggleProjectCalendar}
          isOpen={calendarOpen.project}
          onSelect={setProjectRange}
        />
        <FormField label="진행 방식" required>
          <FilterSelectbox
            filterTitle="진행 방식을 선택해주세요"
            filterList={MODE_TYPE}
            filterSelectType="long"
            disableSelectedStyle={true}
            triggerClassName="text-gray-80 border-none"
          />
        </FormField>
        <DateRangeInput
          label="모집 마감일"
          placeholder="모집 기간을 입력해주세요"
          range={recruitRange}
          onToggle={toggleRecruitCalendar}
          isOpen={calendarOpen.recruit}
          onSelect={setRecruitRange}
        />
        <FormField label="연락 방법" required>
          <FilterSelectbox
            filterTitle="연락 방법을 선택해주세요"
            filterList={CONTACT_METHOD}
            filterSelectType="long"
            disableSelectedStyle={true}
            triggerClassName="text-gray-80 border-none"
          />
        </FormField>
        <FormField label="연락처" required>
          <Input
            customType="long"
            type="text"
            name=""
            id=""
            placeholder="연락처를 입력해주세요"
          />
        </FormField>
      </div>
      <div className="mb-7">
        <p className="body-large-m text-gray-80 mb-[10px]">
          모집 포지션 <em className="text-accent-error">*</em>
        </p>
        <PositionSmallButton
          className="flex items-center gap-4 p-7 rounded-lg input-shadow"
          value={selectedPositions}
          onChange={setSelectedPositions}
        />
      </div>
      <div>
        <p className="body-large-m text-gray-80 mb-[10px]">
          사용 예정 스킬 <em className="text-accent-error">*</em>
        </p>
        <ul className="flex flex-wrap gap-4 p-7 input-shadow rounded-lg">
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
  );
};
export default BasicInfo;
