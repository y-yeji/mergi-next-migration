import SkillLogo from "./SkillLogo";
import StatusBadge from "./StatusBadge";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { useState } from "react";
import CommonModal from "./CommonModal";
import { formatDate } from "@/lib/formatDate";

type BadgeVariant = "success" | "warning" | "danger" | "done";

interface StatusBadgeProps {
  badgeType: BadgeVariant;
  badgeText: string;
}

interface ApplicationsCardProps {
  title: string;
  deadline: number;
  applicationsCardStatus: BadgeVariant;
  applicationsCardStatusText: string;
  skills: string[];
  positions: string[];
  showCancelModal?: boolean;
}

const ApplicationsCard = ({
  title,
  deadline,
  applicationsCardStatus,
  applicationsCardStatusText,
  skills,
  positions,
  showCancelModal = true,
}: ApplicationsCardProps) => {
  const [isCancel, setIsCancel] = useState(true);

  return (
    <div className="w-full max-w-[522px] h-[170px] p-5 rounded-lg bg-white input-shadow">
      <div className="flex justify-between items-center mb-[14px]">
        <p className="body-large-b">{title}</p>
        <StatusBadge
          badgeType={applicationsCardStatus}
          badgeText={applicationsCardStatusText}
        />
      </div>
      <div>
        <ul className="flex items-center gap-2 mb-3">
          {skills.map((skill) => (
            <li key={skill}>
              <SkillLogo name={skill} skill={skill} />
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-between items-end">
        <div className="flex flex-col">
          <ul className="flex gap-2 mb-3">
            {positions.map((position) => (
              <li key={position}>
                <Badge variant="position">{position}</Badge>
              </li>
            ))}
          </ul>
          <span className="caption-r text-gray-50">
            마감일 | {formatDate(deadline)}
          </span>
        </div>
        {showCancelModal && applicationsCardStatus !== "success" && (
          <CommonModal
            disabled={applicationsCardStatus === "done"}
            modalButton={
              <Button
                variant={
                  applicationsCardStatus === "warning"
                    ? "applicationCancelWarning"
                    : "applicationCancelDone"
                }
                disabled={applicationsCardStatus === "done"}
              >
                신청 취소
              </Button>
            }
            modalTitle="신청을 취소 하시겠어요?"
            actionButtonText="취소하기"
          />
        )}
      </div>
    </div>
  );
};

export default ApplicationsCard;
