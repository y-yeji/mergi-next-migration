import { POSITION } from "@/constants/position";
import { Badge } from "../ui/badge";

interface PositionBadgeProps {
  className?: string;
}

const PositionBadge = ({ className }: PositionBadgeProps) => {
  return (
    <ul className={className}>
      {POSITION.slice(0, 3).map((position) => (
        <li key={position}>
          <Badge variant="position">{position}</Badge>
        </li>
      ))}
    </ul>
  );
};

export default PositionBadge;
