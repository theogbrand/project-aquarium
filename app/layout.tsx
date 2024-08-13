import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "@/components/Navbar";
import ChatBubbleWidget from "@/components/ChatBubbleWidget";
import { Toaster } from "@/components/chatbot-widget/ui/toaster"
import { CSPostHogProvider } from './providers'
import dynamic from 'next/dynamic'

const PostHogPageView = dynamic(() => import('./PostHogPageView'), {
  ssr: false,
})


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Project Aquarium",
  description: "Catalog of SEA data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        ></meta>
      </Head>
      <CSPostHogProvider>
        <TooltipProvider>
          <body className={inter.className}>
            <Navbar />
            {children}
            <ChatBubbleWidget />
            <Toaster />
          </body>
        </TooltipProvider>
      </CSPostHogProvider>
      <link
        rel="stylesheet"
        href="https://unpkg.com/@speed-highlight/core/dist/themes/dark.css"
      ></link>
      <script type="module" src="/seacrowd-catalogue/static.js"></script>
    </html>
  );
}
