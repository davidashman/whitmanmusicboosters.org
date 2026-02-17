import Copyright from "@/components/Copyright";
import Header from "@/components/Header";
import SupportMessage from "@/components/SupportMessage";
import GiveButterWidget from "@/components/GiveButterWidget";

export default function Banner() {
  const widget = process.env.NEXT_PUBLIC_BUTTER_WIDGET || "L4k8Wj";
  const title = process.env.NEXT_PUBLIC_BUTTER_TITLE;

  return (
    <main className="min-h-screen bg-white mx-auto">
      <Header />
      <SupportMessage />
      <GiveButterWidget id={widget} title={title} />
      <Copyright />
    </main>
  );
}
