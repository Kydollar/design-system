"use client"

import Link from "next/link";
import { motion } from "framer-motion";
import useElementSize from "@/hooks/useElementSize";
import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/libs/utils";
import { useScrollNav } from "@/hooks/useScrollNav";

export function SiteNavbar() {
    const [squareRef, { height }] = useElementSize()
    const scrollNav = useScrollNav()
    
    return (
        <motion.header style={{ height: `${height}px` }}>
            <motion.nav
                ref={squareRef}
                className={cn("fixed w-full top-0 left-0 z-[999] transition-colors duration-500", scrollNav && "before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:backdrop-blur-md before:z-[-1] before:shadow-sm before:bg-white/80 border-y-[1px] border-gray-300/20 text-gray-500")}>
                <div className="container mx-auto px-4">
                    <div className="flex flex-row justify-between items-center py-2">
                        <Link href="/" className={"flex-1"}>
                            <div className={`notranslate inline-flex items-center justify-center cursor-pointer font-bold text-xl`}>
                                <span>DEVRIZ</span>
                            </div>
                        </Link>
                        <nav className="space-x-4">
                            <Link href="/">Home</Link>
                            <Link href="/our-company">Our Company</Link>
                            <Link href="/news">News</Link>
                            <Link href="/careers">Careers</Link>
                            <Link href="/contact">Our Contact</Link>
                        </nav>
                        <div className="flex gap-x-4 items-center justify-end lg:flex-1">
                            <ModeToggle />
                        </div>
                    </div>
                </div>
            </motion.nav>
        </motion.header>
    )
}