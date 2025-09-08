"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useState } from "react";

type SelectVariants = "short" | "application" | "long";

interface FilterSelectboxProps {
  filterTitle: string;
  filterList: string[];
  filterSelectType: SelectVariants;
  triggerClassName?: string;
  contentClassName?: string;
  disableSelectedStyle?: boolean;
}

const FilterSelectbox = ({
  filterTitle,
  filterList,
  filterSelectType,
  triggerClassName = "",
  contentClassName = "",
  disableSelectedStyle = false,
}: FilterSelectboxProps) => {
  const [filterValue, setFilterValue] = useState<string>("");
  return (
    <Select value={filterValue} onValueChange={setFilterValue}>
      <SelectTrigger
        variant={filterSelectType}
        className={cn(
          !disableSelectedStyle &&
            filterValue &&
            "border-primary-3 text-primary-3",
          !disableSelectedStyle && "transition-colors duration-200",
          triggerClassName
        )}
      >
        <SelectValue placeholder={filterTitle} />
      </SelectTrigger>
      <SelectContent variant={filterSelectType} className={contentClassName}>
        {filterList.map((item) => (
          <SelectItem key={item} value={item} variant={filterSelectType}>
            {item}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default FilterSelectbox;
