import HeaderLine from "@/components/HeaderLine";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import mypic from "../public/gokurun.gif";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shaheerkhan",
  description:
    "Muhammad Shaheer khan is a software engineer. He is currently working at Uppedevents, an All around Event-festival Management Company.",
  ogImage: '../public/gokurun.gif',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />

        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.ogImage} />

        <link rel="icon" href="/gokurun.gif" sizes="any" type="image/gif" />
        <link rel="icon" href="/gokukid.png" sizes="any" type="image/png" />
      </Head>

      <body >
        {children}
      </body>
    </html>
  );
}
