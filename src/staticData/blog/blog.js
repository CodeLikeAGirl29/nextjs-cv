import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";

import comment1Image from "@/public/assets/img/blog/comment-author.png";
import comment2Image from "@/public/assets/img/blog/comment-author2.png";
import comment3Image from "@/public/assets/img/blog/comment-author.png";

export const blogSocials = [
  {
    Icon: <FaInstagram />,
    link: "#",
  },
  {
    Icon: <FaTwitter />,
    link: "#",
  },
  {
    Icon: <BiWorld />,
    link: "#",
  },
  {
    Icon: <FaGithub />,
    link: "#",
  },
];

export const tags = [
  {
    title: "HTML5",
    link: "#",
  },
  {
    title: "CSS3",
    link: "#",
  },
  {
    title: "WordPress",
    link: "#",
  },
  {
    title: "UI Design",
    link: "#",
  },
  {
    title: "AI",
    link: "#",
  },
  {
    title: "Discussion",
    link: "#",
  },
  {
    title: "Tailwind",
    link: "#",
  },
  {
    title: "Webflow",
    link: "#",
  },
];

export const comments = [
  {
    id: 1,
    author: {
      name: "Mily Martin",
      imageSrc: comment1Image?.src,
    },
    date: "November 02, 2023",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    reply: "",
  },
  {
    id: 2,
    author: {
      name: "Mily Martin",
      imageSrc: comment2Image?.src,
    },
    date: "November 02, 2023",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    reply: "",
  },
  {
    id: 3,
    author: {
      name: "Mily Martin",
      imageSrc: comment3Image?.src,
    },
    date: "November 02, 2023",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    reply: "",
  },
];
