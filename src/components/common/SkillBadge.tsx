import Image from "next/image";

interface SkillBadgeProps {
  name: string;
  skill: string;
  className?: string;
}

const getSkillImageName = (name: string | string[], skill: string) => {
  const nameToUse = Array.isArray(name) ? name[0] : name;
  if (skill)
    return skill
      .toLowerCase()
      .replace(/\s+/g, "_")
      .replace(/\./g, "")
      .replace(/\//g, "")
      .replace(/-/g, "");
  return nameToUse
    .toLowerCase()
    .replace(/\s+/g, "_")
    .replace(/\./g, "")
    .replace(/\//g, "")
    .replace(/-/g, "");
};

const SkillBadge = ({ name, skill, className = "" }: SkillBadgeProps) => {
  const imageName = getSkillImageName(name, skill);
  return (
    <div
      className={`flex items-center gap-[6px] max-w-full h-9 py-[6px] pl-[6px] pr-[10px] caption-r text-gray-80 border border-gray-30 rounded-[50px] ${className}`}
    >
      <Image
        src={`/images/skills/${imageName}.png`}
        alt={name}
        width={24}
        height={24}
      />
      <span className="">{name}</span>
    </div>
  );
};

export default SkillBadge;
