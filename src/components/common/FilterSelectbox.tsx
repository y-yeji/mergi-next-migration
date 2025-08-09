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

type SelectVariants = "short";

interface FilterSelectboxProps {
  filterTitle: string;
  filterList: string[];
  filterSelectType: SelectVariants;
}

const FilterSelectbox = ({
  filterTitle,
  filterList,
  filterSelectType,
}: FilterSelectboxProps) => {
  const [filterValue, setFilterValue] = useState<string>("");
  return (
    <Select value={filterValue} onValueChange={setFilterValue}>
      <SelectTrigger
        variant={filterSelectType}
        className={cn(
          filterValue && "border-primary-3 text-primary-3",
          "transition-colors duration-200"
        )}
      >
        <SelectValue placeholder={filterTitle} />
      </SelectTrigger>
      <SelectContent variant={filterSelectType}>
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
