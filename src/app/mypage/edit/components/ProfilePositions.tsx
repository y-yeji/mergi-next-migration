"use client";

import PositionSmallButton from "@/components/common/PositionSmallButton";
import { useState } from "react";

const ProfilePositions = () => {
  const [selectedPositions, setSelectedPositions] = useState<string[]>([]);
  return (
    <div>
      <section className="mb-11">
        <div className="flex justify-between items-center">
          <h2 className="h2-b">희망하는 포지션</h2>
          <span className="caption-r text-gray-50">최대 3개 선택</span>
        </div>
        <div>
          <PositionSmallButton
            value={selectedPositions}
            onChange={setSelectedPositions}
            max={3}
            className="h-[92px] flex items-center gap-4 p-7 bg-white input-shadow"
          />
        </div>
      </section>
    </div>
  );
};

export default ProfilePositions;
