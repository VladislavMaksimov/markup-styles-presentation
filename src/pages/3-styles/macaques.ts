import { MacaqueCardProps } from "./MacaquesBand/MacaqueCard/MacaqueCard";
import macaque1 from "../../assets/photos/monkey-2790452_1280.jpg";
import macaque2 from "../../assets/photos/animal-g099442b69_1280.jpg";
import achievement1 from "../../assets/icons/achievement-award-champion-svgrepo-com.svg";
import achievement2 from "../../assets/icons/achievement-education-learning-school-study-trophy-svgrepo-com.svg";
import achievement3 from "../../assets/icons/achievement-reward-award-svgrepo-com.svg";

const achievements = [
  { title: "Achievement 1", pictureSrc: achievement1 },
  { title: "Achievement 2", pictureSrc: achievement2 },
  { title: "Achievement 3", pictureSrc: achievement3 },
];

const mockMacaque1: MacaqueCardProps = {
  photoSrc: macaque1,
  name: "Web Macaque 1",
  level: 1,
  skills: ["HTML", "CSS", "JavaScript"],
  achievements: [...achievements],
};

const mockMacaque2: MacaqueCardProps = {
  photoSrc: macaque2,
  name: "Web Macaque 2",
  level: 10,
  skills: ["HTML5", "SCSS", "JavaScript", "TypeScript"],
  achievements: [...achievements],
};

export const macaques: MacaqueCardProps[] = [
  {
    ...mockMacaque1,
  },
  {
    ...mockMacaque2,
  },
  {
    ...mockMacaque1,
  },
  {
    ...mockMacaque2,
  },
  {
    ...mockMacaque1,
  },
  {
    ...mockMacaque2,
  },
  {
    ...mockMacaque1,
  },
  {
    ...mockMacaque2,
  },
  {
    ...mockMacaque1,
  },
  {
    ...mockMacaque2,
  },
];
