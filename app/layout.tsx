import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GET FIT GYM | Premium Fitness in Addis Ababa",
  description:
    "GET FIT GYM in CMC, Addis Ababa offers fitness, strength training, personal coaching, dance fitness, nutrition, kids programs, spa services, and healthy food.",
  keywords: [
    "GET FIT GYM",
    "gym in Addis Ababa",
    "CMC gym",
    "fitness Ethiopia",
    "personal training Addis Ababa",
    "kickboxing Addis Ababa",
  ],
  openGraph: {
    title: "GET FIT GYM | Transform Your Body. Transform Your Life.",
    description:
      "A complete local fitness destination in CMC, Addis Ababa with expert training, specialized programs, and recovery services.",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
