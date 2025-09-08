import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { format } from "date-fns";
import { CalendarCheck } from "lucide-react";
import { DateRange } from "react-day-picker";

const DateRangeInput = ({
  label,
  placeholder,
  range,
  onToggle,
  isOpen,
  onSelect,
}: {
  label: string;
  placeholder: string;
  range: DateRange | undefined;
  onToggle: () => void;
  isOpen: boolean;
  onSelect: (range: DateRange | undefined) => void;
}) => {
  return (
    <div className="relative">
      <p className="body-large-m text-gray-80 mb-[10px]">
        {label} <em className="text-accent-error">*</em>
      </p>
      <label htmlFor="" className="relative">
        <Input
          customType="long"
          value={
            range?.from && range?.to
              ? `${format(range.from, "yyyy-MM-dd")} ~ ${format(
                  range.to,
                  "yyyy-MM-dd"
                )}`
              : ""
          }
          readOnly
          placeholder={placeholder}
        />
        <Button
          type="button"
          variant="custom"
          className="w-6 h-6 absolute right-2 top-[-2px] cursor-pointer p-0"
          onClick={onToggle}
        >
          <CalendarCheck className="text-gray-50 [_svg]:size-6" />
        </Button>
      </label>
      {isOpen && (
        <Calendar
          mode="range"
          numberOfMonths={2}
          selected={range}
          onSelect={onSelect}
          className="w-[510px] absolute z-10 rounded-lg border input-shadow"
        />
      )}
    </div>
  );
};
export default DateRangeInput;
