import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Layout, FixedPlugin } from "@/components";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trading Game",
  description: "One bet one life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
    <head>
    <body >
        <Layout>
          {children}
          <FixedPlugin />
        </Layout>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </body>
    </head>
    </html>
  );
}
