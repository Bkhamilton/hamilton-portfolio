import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto, Orbitron, Rajdhani } from "next/font/google";
import "./globals.css";
import StarsBackground from '@/components/Helpers/StarsBackground'

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const roboto = Roboto({
    weight: "500",
    variable: "--font-roboto",
    subsets: ["latin"],
});

const orbitron = Orbitron({
    weight: "500",
    variable: "--font-orbitron",
    subsets: ["latin"],
});

const rajdhani = Rajdhani({
    weight: "500",
    variable: "--font-rajdhani",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Software Developer - Hamilton",
    description: "A Software Developer Portfolio for Ben Hamilton",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} ${orbitron.variable} ${rajdhani.variable} antialiased`}>
                <div className="relative bg-black">
                    {/* Stars Layer */}
                    <StarsBackground />

                    {/* Main Content */}
                    <div className="relative z-0 flex">
                        <div className="fixed top-50 left-0 h-full w-25 bg-transparent text-white p-2 flex flex-col justify-between">
                            {/* Your pinned component content here */}
                            <div className="flex flex-col items-center">
                                <a
                                    href="mailto:bkhamilton310@gmail.com?subject=Hello%20Ben&body=Hi%20Ben,%0D%0A%0D%0AI'm%20reaching%20out%20to%20connect%20with%20you."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transform rotate-90 origin-bottom-left whitespace-nowrap hover:underline"
                                >
                                    bkhamilton310@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className="ml-1/4 w-full">
                            {children}
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
}