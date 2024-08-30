import { ThemeProvider } from "@/components/theme-provider";

import Navbar from "@/components/navbar";
import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
const HG = Hanken_Grotesk({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
    title: "Free Unlimited File Converter",

    keywords: "image converter, video converter, audio converter, unlimited image converter, unlimited video converter",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={HG.className}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                    <Navbar />
                    <div className="pt-32 min-h-screen lg:pt-36 2xl:pt-44 container max-w-4xl lg:max-w-6xl 2xl:max-w-7xl">{children}</div>
                </ThemeProvider>
            </body>
        </html>
    );
}
