import Link from "next/link";
import React from "react";
import { ModeToggle } from "@/components/mode-toggle";

export function SiteNavbar() {
    return (
        <header className="border-b p-4 flex flex-row justify-between">
            <nav className="space-x-4">
                <Link href="/">Home</Link>
                <Link href="/our-company">Our Company</Link>
                <Link href="/news">News</Link>
                <Link href="/careers">Careers</Link>
                <Link href="/contact">Our Contact</Link>
            </nav>
            <div>
                <ModeToggle />
            </div>
        </header>
    );
};