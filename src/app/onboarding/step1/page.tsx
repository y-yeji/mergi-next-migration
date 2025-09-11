"use client";

import PositionSmallButton from "@/components/common/PositionSmallButton";
import OnboardingStepper from "@/components/onboarding/OnboardingStepper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const Step1 = () => {
  const [selectedPositions, setSelectedPositions] = useState<string[]>([]);
  const [step, setStep] = useState(1);
  return (
    <div className="h-[683px] p-5">
      <OnboardingStepper currentStep={step} totalSteps={2} />
      <section className="mb-7">
        <p className="h4-b mb-[10px] text-gray-80">닉네임을 입력해주세요.</p>
        <div>
          <Label className="relative mb-1">
            <Input
              placeholder="닉네임"
              className="w-[534px] h-[46px] pl-4 py-2 placeholder:text-gray-40 input-shadow"
            />
            <Button
              type="submit"
              variant="small"
              tone="primary"
              className="absolute left-[86%] caption-r cursor-pointer"
            >
              중복확인
            </Button>
          </Label>
          <div className="flex justify-between items-center">
            <p className="caption-r text-gray-50">
              중복된 이름ㆍ특수문자 사용불가
            </p>
            <p className="caption-r text-gray-50">1/10</p>
          </div>
        </div>
      </section>
      <section className="mb-7">
        <p className="h4-b mb-[10px] text-gray-80">
          간단하게 본인을 소개해주세요.
        </p>
        <Label className="relative mb-1">
          <Input
            placeholder="한 줄 소개"
            className="w-[534px] h-[46px] pl-4 py-2 placeholder:text-gray-40 input-shadow"
          />
        </Label>
        <p className="text-right caption-r text-gray-50">1/20</p>
      </section>
      <section className="mb-[78px] max-w-[534px]">
        <div className="mb-[10px] flex justify-between items-center">
          <p className="h4-b text-gray-80">희망하시는 포지션을 선택해주세요.</p>
          <span className="caption-r text-gray-50">최대 3개 선택</span>
        </div>
        <PositionSmallButton
          className="flex flex-wrap gap-x-[18px] gap-y-3 justify-between"
          value={selectedPositions}
          onChange={setSelectedPositions}
          max={3}
          buttonWidth="w-[120px]"
        />
      </section>
      <Button
        type="submit"
        tone="primary"
        className="w-full px-[253px] py-[14px] rounded-lg"
      >
        다음
      </Button>
    </div>
  );
};

export default Step1;
