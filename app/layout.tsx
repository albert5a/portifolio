import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Background3D } from "@/components/background-3d";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Albert Soares | Desenvolvedor Full-Stack",
  description:
    "Portfólio de Albert Soares - Desenvolvedor Full-Stack especializado em TypeScript, Node.js, React, Next.js, Docker e AWS. Entusiasta de IA e apaixonado por criar soluções inovadoras.",
  keywords: [
    "Albert Soares",
    "Desenvolvedor Full-Stack",
    "TypeScript",
    "Node.js",
    "React",
    "Next.js",
    "Docker",
    "AWS",
    "IA",
    "Minas Gerais",
  ],
  authors: [{ name: "Albert Soares" }],
  openGraph: {
    title: "Albert Soares | Desenvolvedor Full-Stack",
    description:
      "Desenvolvedor Full-Stack especializado em TypeScript, Node.js, React, Next.js, Docker e AWS.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased bg-background`}
    >
      <body className="min-h-full flex flex-col">
        <Background3D />
        {children}
      </body>
    </html>
  );
}
