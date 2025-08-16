'use client'

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {Menu, X} from "lucide-react"

export function Navbar(){
    const [isOpen, setIsOpen] = useState(false)
    const navigation = [
        {name: "Home", href: "/"},
        {name: "About", href: "/#about"},
        {name: "Projects", href: "/projects"},
        {name: "Blogs", href: "/blogs"},
        {name: "Contact", href: "/#contact"}
    ]
    
    return (
        <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <div className="flex justify-between items-center h-20 ">
                    <Link
                     href="/"
                     className="font-heading font-bold text-2xl text-gray-900 tracking-tight hover:text-gray-700 transition-colors"
                    >
                    AlDeep
                    </Link>
                    
                    <nav className="hidden lg:flex items-center space-x-12">
                        {navigation.map(
                            (item) => (
                                <Link
                                href={item.href}
                                key={item.name}
                                className="
                                text-gray-600 hover:text-gray-900 transition-colors font-medium text-sm uppercase tracking-wide
                                "
                                >
                                {item.name}
                                </Link>
                            )
                        )
                        }
                    </nav>
                    
                    {/* <div className="hidden lg:flex items-center">
                        <Button
                        variant="outline"
                        className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-200 bg-transparent"
                        >
                            Download CV
                        </Button>
                    </div> */}
                        
                    <Button
                        variant="ghost"
                        size="icon"
                        className="lg:hidden hover:bg-gray-100"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </Button>
                </div>
                    {isOpen && (
                        <div className="lg:hidden">
                            <div className="px-4 pt-4 pb-6 space-y-4 bg-white border-t border-gray-100">
                                {navigation.map(
                                    (item) => (
                                        <Link
                                        href={item.href}
                                        key={item.name}
                                        className="block py-3 text-gray-600 hover:text-gray-900 transition-colors font-medium text-sm uppercase tracking-wide"
                                        onClick={() => setIsOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    )
                                )}
                                {/* <div className="pt-4 border-t border-gray-100">
                                    <Button
                                        variant="outline"
                                        className="w-full border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white bg-transparent"   
                                    >
                                        Download CV (In Progress)
                                    </Button>
                                </div> */}
                            </div>
                        </div>
                    )}
            </div>
        </header>
    )

}