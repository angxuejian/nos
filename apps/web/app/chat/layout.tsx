"use client"

import React, { useState } from "react";
import Sidebar from "./components/sidebar";
import Headerbar from "./components/headerbar";

export default function ChatLayout({ children, }: { children: React.ReactNode; }) {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="w-screen h-screen flex relative">
         <Sidebar isOpen={isOpen} onOpenChange={setIsOpen} />

            <main className="flex-1">
            <Headerbar isOpen={isOpen} onOpenChange={setIsOpen}  />

                {children}
            </main>
        </div>
    )
}