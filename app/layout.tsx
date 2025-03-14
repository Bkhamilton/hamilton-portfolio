import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
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
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <div className="flex">
                    <div className="fixed top-50 left-0 h-full w-25 bg-transparent text-white p-2 flex flex-col justify-between">
                        {/* Your pinned component content here */}
                        <div className="flex flex-col items-center">
                            <p className="transform rotate-90 origin-bottom-left whitespace-nowrap">bkhamilton310@gmail.com</p>
                        </div>
                    </div>
                    <div className="ml-1/4 w-full">
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}