import { POSITION, POSITION_SKILLS } from "@/constants/position";
import SkillBadge from "@/components/common/SkillBadge";

const positionSkillList = POSITION_SKILLS[POSITION[0]];

const ProfileSkills = () => {
  return (
    <div>
      <section className="mb-6">
        <h2 className="h2-b mb-2">관심있거나 보유하고 있는 스킬</h2>
        <div className="w-full p-7 input-shadow">
          <div className="mb-7">
            <h3 className="h3-b mb-3">마케팅</h3>
            <ul className="flex flex-wrap gap-2">
              {positionSkillList.map((skill) => (
                <li key={skill}>
                  <button type="button" className="w-full">
                    <SkillBadge name={skill} skill={skill} />
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-7">
            <h3 className="h3-b mb-3">마케팅</h3>
            <ul className="flex flex-wrap gap-2">
              {positionSkillList.map((skill) => (
                <li key={skill}>
                  <button type="button" className="w-full">
                    <SkillBadge name={skill} skill={skill} />
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="h3-b mb-3">마케팅</h3>
            <ul className="flex flex-wrap gap-2">
              {positionSkillList.map((skill) => (
                <li key={skill}>
                  <button type="button" className="w-full">
                    <SkillBadge name={skill} skill={skill} />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfileSkills;
