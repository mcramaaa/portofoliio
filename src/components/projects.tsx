"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { Badge } from "./ui/badge";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with product listings, cart functionality, and secure checkout process.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    demoUrl: "#",
    githubUrl: "https://github.com/mcramaaa/exam-backoffice",
  },
  {
    title: "Multi-Institution Online Exam System",
    description:
      "An online exam platform used by multiple institutions including the UINSA Mathematics Olympiad and other school exams, featuring dashboards for superadmins and institution admins.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "React", "Tailwind CSS", "Dashboard"],
    demoUrl: "#",
    githubUrl: "https://github.com/mcramaaa/exam-backoffice",
  },
  {
    title: "Mathematics Olympiad (Olmat) UINSA",
    description:
      "Registration and management system for the Mathematics Olympiad at UIN Sunan Ampel, including participant registration, school data management, and validation.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "React", "Tailwind CSS", "Form Validation"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "WhatsApp Bot API",
    description:
      "A WhatsApp bot using whatsapp-web.js to check valid numbers, send OTPs, password reset links, notifications with templates, and bulk messaging with delay.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Node.js", "Express", "whatsapp-web.js", "API"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Blood Sugar Level Reminder App",
    description:
      "An app that reminds users to regularly monitor their blood sugar levels to help maintain their health.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React Native", "TypeScript"],
    demoUrl: "#",
    githubUrl: "https://github.com/mcramaaa/sugar-assist-app",
  },
  {
    title: "Game-Based Learning Media",
    description:
      "Android-based game learning media registered with copyright, designed for interactive education.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Android", "Java", "Kotlin", "Game Development"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "E-Commerce Backoffice Dashboard",
    description:
      "A backoffice dashboard for managing products, customers, and roles, integrated with APIs using Next.js and MySQL.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "React", "MySQL", "API"],
    demoUrl: "#",
    githubUrl: "https://github.com/mcramaaa/exam-backoffice",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            My Projects
          </h2>
          <div className="w-20 h-1.5 bg-primary rounded-full mb-8" />
          <p className="text-muted-foreground max-w-2xl">
            Here are some of my recent projects. Each one was built to solve a
            specific problem or explore new technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex-col flex justify-between overflow-hidden transition-all hover:shadow-md">
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                  </CardContent>
                </div>
                <CardFooter className="flex flex-col items-start px-6 pb-6 pt-0">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className=" flex gap-4">
                    <Button size="sm" className="gap-2" asChild>
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="gap-2"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
