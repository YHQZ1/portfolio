import { FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";
import {
  SiLeetcode,
  SiCodeforces,
  SiHackerrank,
  SiGmail,
} from "react-icons/si";

export const socialLinks = [
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/uttkarsh-ruparel/",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/YHQZ1",
  },
  {
    name: "LeetCode",
    icon: SiLeetcode,
    url: "https://leetcode.com/u/yhqz/",
  },
  {
    name: "Codeforces",
    icon: SiCodeforces,
    url: "https://codeforces.com/profile/yhqz",
  },
  {
    name: "HackerRank",
    icon: SiHackerrank,
    url: "https://www.hackerrank.com/profile/yhqz1",
  },
];

export const specialLinks = [
  {
    name: "Discord",
    icon: FaDiscord,
    type: "copy",
    value: "YHQZ#3185",
  },
  {
    name: "Email Me",
    icon: SiGmail,
    type: "internal",
    to: "/contact",
  },
];
