import Image from "next/image";

interface SkillLogoProps {
  name: string;
  skill: string;
}

const SkillLogo = ({ name, skill }: SkillLogoProps) => {
  return (
    <Image src={`/skills/${skill}.png`} alt={name} width={28} height={28} />
  );
};

export default SkillLogo;
