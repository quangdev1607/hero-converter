// imports

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";

export default function Navbar({}): any {
    return (
        <nav className="fixed z-50 flex items-center justify-between w-full h-24 px-4 py-10 backdrop-blur-md bg-background bg-opacity-30 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
            <Link className={cn("flex items-center gap-2")} href="/">
                <Image alt="logo" width={32} height={32} className=" cursor-pointer dark:invert" src="/icons/logo-main.svg" />
                <span className="text-primary-foreground text-2xl font-bold">Hero Converter</span>
            </Link>

            <div className="items-center  gap-2 flex">
                <ModeToggle />
                <Button variant={"link"} asChild>
                    <Link target="_blank" href="https://github.com/quangdev1607/hero-converter">
                        <span className="text-xl">
                            <FaGithub />
                        </span>
                    </Link>
                </Button>
            </div>
        </nav>
    );
}
