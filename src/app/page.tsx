import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import Blog from "./blog/BlogClient";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Home() {
  return (
    <div>
      <div className="mb-12">
        <Image
          src="https://github.com/huamanraj.png"
          alt="Profile"
          width={120}
          height={120}
          className="rounded-full mb-6"
          priority
        />
        <h1 className="text-3xl font-bold mb-4">Aman Raj</h1>
        <p className="text-muted-foreground mb-4">
          I am a full-stack developer, specializing in building efficient,
          scalable web applications. I have hands-on experience with both
          frontend and backend technologies.
        </p>
        <p className="text-muted-foreground mb-4">
          Over the years, I’ve worked on a variety of projects across multiple
          domains, and have contributed to open-source initiatives. I’m always
          eager to learn and collaborate on impactful solutions.
        </p>
        <p className="text-muted-foreground mb-4">
          If you&apos;re looking to collaborate or discuss opportunities, feel
          free to{" "}
          <Link
            href="mailto:amanraj12.ar@gmail.com"
            className="underline relative group"
          >
            send me an email
            <span className="absolute left-0 mt-1 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              amanraj12.ar@gmail.com
            </span>
          </Link>{" "}
          or connect via my social channels.
        </p>

        <div className="flex gap-2  mb-4  ">
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="rounded-full py-1  "
          >
            <Link href="https://github.com/huamanraj">
              <FaGithub className="h-6 w-6 fill-muted-foreground hover:fill-foreground" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild className="rounded-full">
            <Link href="https://twitter.com/huamanraj">
              <FaSquareXTwitter className="h-6 w-6 fill-muted-foreground hover:fill-foreground" />
              <span className="sr-only">Twitter</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild className="rounded-full">
            <Link href="https://linkedin.com/in/huamanraj">
              <FaLinkedin className="h-6 w-6 fill-muted-foreground hover:fill-foreground" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild className="rounded-full">
            <Link href="https://instagram.com/https.amanraj">
              <FaInstagram className="h-6 w-6 fill-muted-foreground hover:fill-foreground" />
              <span className="sr-only">Instagram</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild className="rounded-full">
            <Link href="./contact">
              <SiGmail className="h-6 w-6 fill-muted-foreground hover:fill-foreground" />
              <span className="sr-only">Instagram</span>
            </Link>
          </Button>
        </div>
        <Button
          className="text-primary text-md underline underline-offset-4 p-0 mx-0  hover:underline-offset-1 bg-transparent hover:bg-transparent ease-in-out transition-all duration-200 "
          asChild
        >
          <Link href="/resume">View Resume</Link>
        </Button>
        <div className="pt-12">
          <Blog numberOfBlogs={3} />
          <Link href="/blog">
            <button className="text-md px-1  text-foreground   hover:underline ease-in-out transition-all duration-200">
              More Blogs ↗️
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}