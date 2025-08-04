import { Badge } from "../ui/badge";

type BadgeVariant =
  | "default"
  | "secondary"
  | "destructive"
  | "outline"
  | "position"
  | "success"
  | "warning"
  | "danger"
  | "done";

interface StatusBadgeProps {
  badgeType: BadgeVariant;
  badgeText: string;
}

const StatusBadge = ({ badgeType, badgeText }: StatusBadgeProps) => {
  return <Badge variant={badgeType}>{badgeText}</Badge>;
};

export default StatusBadge;
