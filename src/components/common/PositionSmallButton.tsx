"use client";

import { useState } from "react";
import { POSITION } from "@/constants/position";
import { Button } from "@/components/ui/button";

interface PositionSmallButtonProps {
  className?: string;
}

const PositionSmallButton = ({ className }: PositionSmallButtonProps) => {
  const [isSelectedPositions, setIsSelectedPositions] = useState<string[]>([]);

  const handlePositionSelect = (position: string) => {
    setIsSelectedPositions((prev) => {
      if (prev.includes(position)) {
        return prev.filter((p) => p !== position);
      } else {
        if (prev.length >= 3) {
          return prev;
        }
        return [...prev, position];
      }
    });
  };

  return (
    <div className={className}>
      {POSITION.map((position) => (
        <Button
          key={position}
          variant={
            isSelectedPositions.includes(position)
              ? "positionActive"
              : "position"
          }
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
