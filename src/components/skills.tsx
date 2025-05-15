"use client";

import { motion } from "framer-motion";
import { FaDocker, FaJsSquare, FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { FaGithub, FaUbuntu } from "react-icons/fa6";
import { IoLogoFigma } from "react-icons/io5";
import {
  SiAdobeaftereffects,
  SiAdobeillustrator,
  SiAdobeindesign,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNginx,
  SiMongodb,
  SiLaravel,
} from "react-icons/si";

const programmingSkills = [
  {
    icon: <FaGithub />,
    title: "Github",
    value: 85,
  },
  {
    icon: <FaJsSquare />,
    title: "JavaScript",
    value: 90,
  },
  {
    icon: <BiLogoTypescript />,
    title: "TypeScript",
    value: 90,
  },
  {
    icon: <FaReact />,
    title: "React",
    value: 80,
  },
  {
    icon: <FaReact />,
    title: "React Native",
    value: 80,
  },
  {
    icon: <SiNextdotjs />,
    title: "Next Js",
    value: 90,
  },
  {
    icon: <SiNestjs />,
    title: "Nest Js",
    value: 60,
  },
  {
    icon: <SiLaravel />,
    title: "Laravel",
    value: 75,
  },
  {
    icon: <SiMysql />,
    title: "MySQL",
    value: 75,
  },
  {
    icon: <SiMongodb />,
    title: "MongoDB",
    value: 75,
  },

  {
    icon: <FaDocker />,
    title: "Docker",
    value: 75,
  },
  {
    icon: <SiNginx />,
    title: "Nginx",
    value: 75,
  },
  {
    icon: <FaUbuntu />,
    title: "Ubuntu Linux",
    value: 95,
  },
];

const designVideoSkills = [
  {
    icon: <IoLogoFigma />,
    title: "Figma",
    value: 95,
  },
  {
    icon: <SiAdobepremierepro />,
    title: "Premiere Pro",
    value: 90,
  },
  {
    icon: <SiAdobeaftereffects />,
    title: "After Effects",
    value: 90,
  },
  {
    icon: <SiAdobeillustrator />,
    title: "Illustrator",
    value: 100,
  },
  {
    icon: <SiAdobephotoshop />,
    title: "Photoshop",
    value: 85,
  },
  {
    icon: <SiAdobeindesign />,
    title: "Indesign",
    value: 90,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            My Skills
          </h2>
          <div className="w-20 h-1.5 bg-primary rounded-full mb-8" />
          <p className="text-muted-foreground max-w-2xl">
            I’ve worked with a wide range of technologies across the web
            development and creative fields. From building full-stack
            applications using modern frameworks to crafting engaging visual
            content, these are the tools I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Programming Skills Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold tracking-tight mb-6 text-center text-primary">
            Programming & Development
          </h3>
          <div className="flex flex-wrap gap-6 justify-center">
            {programmingSkills.map((skill, index) => (
              <motion.div
                key={`programming-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-3 text-3xl">{skill.icon}</div>
                  <p>{skill.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Design and Video Skills Section */}
        <div>
          <h3 className="text-2xl font-semibold tracking-tight mb-6 text-center text-primary">
            Design & Video Editing
          </h3>
          <div className="flex flex-wrap gap-6 justify-center">
            {designVideoSkills.map((skill, index) => (
              <motion.div
                key={`design-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-3 text-3xl">{skill.icon}</div>
                  <p>{skill.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
