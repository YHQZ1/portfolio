import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaDiscord,
  FaStackOverflow,
} from "react-icons/fa";
import { SiLeetcode, SiCodeforces, SiHackerrank } from "react-icons/si";

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
    url: "https://codeforces.com/profile/uttkarsh09",
  },
  {
    name: "HackerRank",
    icon: SiHackerrank,
    url: "https://www.hackerrank.com/profile/yhqz1",
  },
  {
    name: "Stack Overflow",
    icon: FaStackOverflow,
    url: "https://stackoverflow.com/users/29559883/uttkarsh-ruparel",
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
    icon: FaEnvelope,
    type: "internal",
    to: "/contact",
  },
];
