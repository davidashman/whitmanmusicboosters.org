import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const baro = localFont({
  src: [
    {
      path: '../../public/fonts/Baro Plain.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Baro Plain.woff',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: "--font-baro",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Whitman Music Boosters - Support Music Education",
  description: "Support music education and performance opportunities for Whitman students. Make a tax-deductible donation to help fund instruments, sheet music, and performance experiences.",
  keywords: "Whitman Music, Music Boosters, Music Education, Donations, School Music",
  authors: [{ name: "Whitman Music Boosters" }],
  openGraph: {
    title: "Whitman Music Boosters",
    description: "Support music education and performance opportunities for Whitman students",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#1a1a1a]">
      <body className={`${baro.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
