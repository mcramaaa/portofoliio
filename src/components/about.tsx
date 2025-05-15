"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Download } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            About Me
          </h2>
          <div className="w-20 h-1.5 bg-primary rounded-full mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative aspect-square max-w-md mx-auto"
          >
            <div className="absolute inset-0 border-2 border-primary rounded-lg transform translate-x-4 translate-y-4" />
            <div className="relative h-full w-full overflow-hidden rounded-lg bg-muted">
              <Image
                src="/assets/photo2.webp"
                alt="Profile"
                width={400}
                height={400}
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">
              Hi, I'm <span className="text-primary">Mochamad Ramadhani</span>
            </h3>
            <p className="text-muted-foreground">
              I am a full-stack developer with over 2 years of experience in web
              and application development. I work across both the front-end and
              back-end, with core expertise in JavaScript, TypeScript, React,
              Next.js, Node.js, and NestJS. I focus on building responsive,
              scalable, and maintainable digital solutions, and enjoy
              collaborating with cross-functional teams to deliver the best
              results. With a user-centered mindset and a strong commitment to
              continuous learning, I strive to create high-quality digital
              products that provide real value.
            </p>

            <div className="pt-4 flex items-center gap-4">
              <Button className="gap-2">
                <Download className="h-4 w-4" />
                Download Resume
              </Button>
              <Link
                href="https://github.com/mcramaaa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <FaGithub className="h-5 w-5" />
                </Button>
              </Link>
              <Link
                href="https://www.linkedin.com/in/mochamad-ramadhani-644666202"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <FaLinkedin className="h-5 w-5" />
                </Button>
              </Link>
              <Link
                href="https://www.instagram.com/mch.rama__"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <FaInstagram className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
