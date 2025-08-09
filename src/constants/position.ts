export const POSITION = [
  "PM",
  "기획",
  "마케팅",
  "디자인",
  "프론트엔드",
  "백엔드",
  "AOS",
  "IOS",
  "데브옵스",
];

const PLANNING_SKILLS = [
  "Miro",
  "Asana",
  "Aha",
  "ProductBoard",
  "Trello",
  "Figma",
  "Adobe XD",
];

const MARKETING_SKILLS = ["Google Analytics", "Google Ads", "Firebase"];

const DESIGN_SKILLS = [
  "Zeplin",
  "Figma",
  "Photoshop",
  "Illustrator",
  "Adobe XD",
];

const FRONTEND_SKILLS = [
  "JavaScript",
  "TypeScript",
  "React",
  "Vue",
  "Svelte",
  "Next.js",
  "Jest",
  "GraphQL",
  "Git",
];

const BACKEND_SKILLS = [
  "Git",
  "Java",
  "Python",
  "Go",
  "Spring",
  "Express",
  "Django",
  "Node.js",
  "Nest.js",
  "Jest",
  "Firebase",
  "GraphQL",
  "PHP",
  "MongoDB",
  "MySQL",
];

const AOS_SKILLS = ["React Native", "Kotlin", "Flutter", "Git"];

const IOS_SKILLS = ["Swift", "SwiftUI", "React Native", "Flutter", "Git"];

const DEVOPS_SKILLS = [
  "Docker",
  "Kubernetes",
  "AWS",
  "Jest",
  "Jenkins",
  "Github Actions",
];

export const POSITION_SKILLS = {
  [POSITION[0]]: PLANNING_SKILLS,
  [POSITION[1]]: PLANNING_SKILLS,
  [POSITION[2]]: MARKETING_SKILLS,
  [POSITION[3]]: DESIGN_SKILLS,
  [POSITION[4]]: FRONTEND_SKILLS,
  [POSITION[5]]: BACKEND_SKILLS,
  [POSITION[6]]: AOS_SKILLS,
  [POSITION[7]]: IOS_SKILLS,
  [POSITION[8]]: DEVOPS_SKILLS,
};
