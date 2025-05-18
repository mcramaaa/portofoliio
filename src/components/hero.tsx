"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <video
        autoPlay
        loop
        // playsInline
        muted
        className="object-cover w-full h-full absolute pointer-events-none"
        src={`https://videos.pexels.com/video-files/29607597/12742138_1920_1080_30fps.mp4`}
      ></video>
      <div className="absolute inset-0 bg-grid-small-white/[0.2] dark:bg-grid-small-white/[0.05] bg-[length:30px_30px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />

      <div className="container relative px-4 md:px-6 h-[90vh] md:h-fit ">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative grid place-items-center aspect-square w-full"
          >
            <Image
              src="/assets/photoHero2.png"
              alt="Mch Rama"
              className="object-cover rounded-md "
              fill
              sizes="1"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 h-full"
          >
            <div className="font-black grid place-items-center font-montserrat opacity-90 w-full h-2/3 bg-clip-text text-transparent text-center lg:text-start text-4xl md:text-6xl lg:text-9xl bg-cover bg-center bg-no-repeat bg-[url(/assets/overlay.jpg)]">
              <TypeAnimation
                preRenderFirstString={true}
                sequence={[
                  1000,
                  "I'm Mch Rama",
                  1000,
                  "I'm Web Developer",
                  1000,
                  "I'm Apps Developer",
                  1000,
                  "I'm Designer",
                  1000,
                  "I'm Photo Editor",
                  1000,
                  "I'm Video Editor",
                  1000,
                ]}
                speed={65}
                repeat={Infinity}
              />
            </div>
            <div className="w-full flex flex-col items-center lg:items-start gap-2">
              <div className="flex gap-3">
                <Badge className="px-4 py-1 text-sm bg-primary text-black rounded-md">
                  Designer
                </Badge>
                <Badge className="px-4 py-1 text-sm bg-primary text-black rounded-md">
                  Programmer
                </Badge>
              </div>
              <div className="flex gap-10 justify-between p-4 rounded-lg">
                <h2 className="text-6xl flex text-white items-center gap-3">
                  4{" "}
                  <span className="text-sm flex flex-col lg:flex-row lg:gap-2 md:text-base lg:text-xl text-brand">
                    year <span>experience</span>
                  </span>
                </h2>
                <div className="w-[1px] bg-white rounded-full"></div>
                <h2 className="text-2xl lg:text-3xl flex text-white items-start justify-center flex-col ">
                  400++{" "}
                  <span className="text-xs md:text-base text-brand">
                    project complete
                  </span>
                </h2>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        >
          <Link href="#about">
            <Button variant="ghost" size="icon" className="rounded-full">
              <ArrowDown className="h-6 w-6" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
