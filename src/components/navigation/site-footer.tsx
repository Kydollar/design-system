"use client"

import * as React from "react"

import { siteConfig } from "@/config/site"
import { cn } from "@/libs/utils"
import { Icons } from "@/components/icons"
import useElementSize from "@/hooks/useElementSize"
import Link from "next/link"

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
    const [squareRef, { width, height }] = useElementSize()

    return (
        <>
            <div className={cn(className, "relative")} style={{ height: `${height}px`, width: `${width}px` }}></div>
            <footer ref={squareRef} className="fixed bottom-0 text-center lg:text-left bg-gray-100 dark:bg-gray-900/50 text-gray-600 w-full">
                <div className="flex justify-center items-center lg:justify-between p-6 border-b border-gray-300">
                    <div className="mr-12 hidden lg:block">
                        <span>Get connected with us on social networks: {height}</span>
                    </div>
                    <div className="flex justify-center items-center">
                        <a href="#!" className="text-gray-600">
                            {/* <FacebookLogo size={24} weight="fill" className="m-2 lg:mr-0" /> */}
                        </a>
                        <a href="#!" className="text-gray-600">
                            {/* <LinkedinLogo size={24} weight="fill" className="m-2 lg:mr-0" /> */}
                        </a>
                        <a href="#!" className="text-gray-600">
                            {/* <InstagramLogo size={24} className="m-2 lg:mr-0" /> */}
                        </a>
                    </div>
                </div>
                <div className="mx-6 py-10 text-left">
                    <div className="flex justify-between gap-4 md:gap-8">
                        <div className="flex flex-col">
                            <div className="">
                                <h6 className="uppercase text-xl font-semibold mb-4 flex items-center justify-start">
                                    <div className="notranslate inline-flex items-center justify-center gap-2 cursor-pointer font-bold text-xl text-primary">
                                        <Icons.logo />
                                        <span>DEVRIZ</span>
                                    </div>
                                </h6>
                                <p>
                                    If you or your business requires Security, Comfort and Competent Professionals,
                                    contact us today to schedule an appointment with a consultant and our Manager.
                                </p>
                            </div>
                            <div className="">
                                <h6 className="uppercase font-semibold mb-4 flex justify-start">Useful links</h6>
                                <p className="mb-4">
                                    <a href="#!" className="text-gray-600">
                                        About Us
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col whitespace-nowrap">
                            <div className="">
                                <h6 className="uppercase font-semibold mb-4 flex justify-start">Layanan</h6>
                                <p className="mb-4">
                                    <a href="#!" className="text-gray-600 ">
                                        Professional Workforce
                                    </a>
                                </p>
                            </div>
                            <div className="">
                                <h6 className="uppercase font-semibold mb-4 flex justify-start">Contact</h6>
                                <p className="flex items-center justify-start cursor-pointer mb-4 break-all">
                                    {/* <Envelope size={24} className="mr-2 min-w-[24px]" /> */}
                                    admin@devriz.co.id
                                </p>
                                <p className="flex items-center justify-start cursor-pointer mb-4 break-all">
                                    {/* <Phone size={24} className="mr-2 min-w-[24px]" /> */}
                                    (021)
                                </p>
                                <p className="flex items-center justify-start cursor-pointer mb-4 break-all">
                                    {/* <WhatsappLogo size={24} className="mr-2 min-w-[24px]" /> */}
                                    +62 812
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center py-4 px-6  bg-gray-200 dark:bg-gray-950">
                    <span>© 2023 Copyright </span>
                    <Link className="notranslate text-gray-600 font-semibold" href="https://www.devriz.co.id">
                        Devriz Solution Indonesia
                    </Link>
                </div>
            </footer>
        </>
    )
}
