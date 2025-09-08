"use client";

import { useState } from "react";
import { POSITION } from "@/constants/position";
import { Button } from "@/components/ui/button";

interface PositionSmallButtonProps {
  className?: string;
  value: string[];
  onChange: (positions: string[]) => void;
  max?: number;
}

const PositionSmallButton = ({
  className,
  value,
  onChange,
  max,
}: PositionSmallButtonProps) => {
  const [isSelectedPositions, setIsSelectedPositions] = useState<string[]>([]);

  // const handlePositionSelect = (position: string) => {
  //   setIsSelectedPositions((prev) => {
  //     if (prev.includes(position)) {
  //       return prev.filter((p) => p !== position);
  //     } else {
  //       if (prev.length >= 3) {
  //         return prev;
  //       }
  //       return [...prev, position];
  //     }
  //   });
  // };

  const handlePositionSelect = (position: string) => {
    const isSelected = value.includes(position);
    if (isSelected) {
      onChange(value.filter((p) => p !== position));
    } else {
      if (typeof max === "number" && value.length >= max) {
        return;
      }
      onChange([...value, position]);
    }
  };
  return (
    <div className={className}>
      {POSITION.map((position) => (
        <Button
          key={position}
          variant={value.includes(position) ? "positionActive" : "position"}
          size="custom"
          className="w-[99px] h-9 cursor-pointer"
          onClick={() => handlePositionSelect(position)}
        >
          {position}
        </Button>
      ))}
    </div>
  );
};

export default PositionSmallButton;
