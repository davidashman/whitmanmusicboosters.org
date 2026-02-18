"use client";

import Copyright from "@/components/Copyright";
import Header from "@/components/Header";
import SupportMessage from "@/components/SupportMessage";
import GiveButterWidget from "@/components/GiveButterWidget";
import { parseWidgetConfig } from "@/lib/parseWidgetConfig";

export default function Home() {
  const config = parseWidgetConfig(process.env.NEXT_PUBLIC_HOME_WIDGET, "jbOGOL");

  return (
    <main className="min-h-screen bg-white mx-auto">
      <Header />
      <SupportMessage />
      <GiveButterWidget id={config.id} title={config.title} />
      <Copyright />
    </main>
  );
}
