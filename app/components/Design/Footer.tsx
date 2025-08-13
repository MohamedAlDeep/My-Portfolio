import Link from "next/link"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export function Footer(){
    const socialLinks = [
        {icon: Github, href: '#', label: "Github"},
        {icon: Linkedin, href: "#", label: "LinkedIn"},
        {icon: Twitter, href: "#", label: "Twitter"},
        {icon: Mail, href: "mailto:neondm@proton.me", label: "Email"}
    ]
 
    return (
        <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7x1 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-2">
                        <Link
                        href="/"
                        className="font-heading font-black text-2xl text-blue-400 hover:text-sky-400 transition-colors"
                        >
                            Let's Connect
                        </Link>
                        <p className="mt-4 text-slate-300 leading-relased max-w-md">
                            Innovating tomorrow through science and technology. Building solutions that make a difference
                        </p>
                        <div className="flex space-x-4 mt-6">
                            {socialLinks.map((social, index) => (
                                <a 
                                href={social.href}
                                key={index}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                                aria-label={social.label}
                                >
                                    <social.icon className="h-5 w-5" />
                                </a>
                            ))}

                        </div>
                    </div>

                    <div>
                        <h3 className="font-heading font-bold text-lg mb-4">
                            Quick Links
                        </h3>

                        <ul className="space-y-2">
                            <li>
                                <Link href="#home" className="text-slate-300 hover:text-blue-400 transition-colors">
                                Home
                                </Link>
                            </li>
                            <li>
                                <Link href="#about" className="text-slate-300 hover:text-blue-400 transition-colors">
                                About
                                </Link>
                            </li>
                            <li>
                                <Link href="#projects"
                                className="text-slate-300 hover:text-blue-400 transition-colors"
                                >
                                Projects
                                </Link>
                            </li>
                            <li>
                                <Link href="#blog" 
                                className="text-slate-300 hover:text-blue-400 transition-colors"
                                >
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-heading font-bold-text-lg mb-4">
                            Categories
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                href="/blog/ai"
                                className="text-slate-300 hover:text-blue-400 transition-colors"
                                >
                                AI & ML
                                </Link>
                            </li>
                            <li>
                                <Link
                                href="/blog/software"
                                className="text-slate-300 hover:text-blue-400 transition-colors"
                                >
                                    Software
                                </Link>
                            </li>
                            <li>
                                <Link
                                href="/blog/iot"
                                className="text-slate-300 hover:text-blue-400 transition-colors"
                                >
                                IoT
                                </Link>
                            </li>
                            <li>
                                <Link
                                href="/blog/tutorials"
                                className="text-slate-300 hover:text-blue-400 transition-colors">
                                    Tutorials
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 mt-12 pt-8 text-center">
                        <p className="text-slate-400">
                            © {new Date().getFullYear() + " "}
                            AlDeep Portfolio. Built with passion for innovation. 
                        </p>
                </div>
            </div>
        </footer>
    )
}