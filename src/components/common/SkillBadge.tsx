import Image from "next/image";

interface SkillBadgeProps {
  name: string;
  skill: string;
}

const SkillBadge = ({ name, skill }: SkillBadgeProps) => {
  return (
    <div className="flex items-center gap-[6px] w-[87px] h-9 py-[6px] pl-[6px] pr-[10px] bg-white border border-gray-30 rounded-[50px]">
      <Image src={`/images/skills/${skill}.png`} alt={name} width={28} height={28} />
      <span className="caption-r text-gray-80">{name}</span>
    </div>
  );
};

export default SkillBadge;
