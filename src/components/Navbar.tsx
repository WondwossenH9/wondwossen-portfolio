'use client'

import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-50">
            <div className="text-xl font-bold text-blue-600">
                Wondwossen.dev
            </div>
            <ul className="flex space-x-6">
                <li>
                    <Link href="/" className="hover:text-blue-500">Home</Link>
                </li>
                <li>
                    <Link href="#projects" className="hover:text-blue-500">Projects</Link>
                </li>
                <li>
                    <Link href="#about" className="hover:text-blue-500">About</Link>
                </li>
                <li>
                    <Link href="#contact" className="hover:text-blue-500">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}
