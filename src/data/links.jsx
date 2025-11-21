import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaInstagram,
  FaDiscord,
  FaReddit,
  FaStackOverflow,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

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
    name: "Stack Overflow",
    icon: FaStackOverflow,
    url: "https://stackoverflow.com/users/29559883/uttkarsh-ruparel",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://www.instagram.com/uttkarsh09_",
  },
  {
    name: "X (Twitter)",
    icon: FaXTwitter,
    url: "https://x.com/uttkarsh09_",
  },
  {
    name: "Reddit",
    icon: FaReddit,
    url: "https://www.reddit.com/user/yhqz1/",
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
