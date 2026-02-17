import Copyright from "@/components/Copyright";
import Header from "@/components/Header";
import SupportMessage from "@/components/SupportMessage";
import GiveButterWidget from "@/components/GiveButterWidget";

export default function Banner() {
  const campaign =
    process.env.NEXT_PUBLIC_BANNER_CAMPAIGN || "2025-2026-general-fundraising";
  const title = process.env.NEXT_PUBLIC_BANNER_TITLE;

  return (
    <main className="min-h-screen bg-white mx-auto">
      <Header />
      <SupportMessage />
      <GiveButterWidget campaign={campaign} title={title} />
      <Copyright />
    </main>
  );
}
