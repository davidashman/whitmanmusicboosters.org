"use client";

import Copyright from "@/components/Copyright";
import Header from "@/components/Header";
import SupportMessage from "@/components/SupportMessage";
import GiveButterWidget from "@/components/GiveButterWidget";

export default function Home() {
  const widget = process.env.NEXT_PUBLIC_HOME_WIDGET || "jbOGOL";
  const title = process.env.NEXT_PUBLIC_HOME_TITLE;

  return (
    <main className="min-h-screen bg-white mx-auto">
      <Header />
      <SupportMessage />
      <GiveButterWidget id={widget} title={title} />
      <Copyright />
    </main>
  );
}
