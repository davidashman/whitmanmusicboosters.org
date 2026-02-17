import Copyright from "@/components/Copyright";
import Header from "@/components/Header";
import GiveButterWidget from "@/components/GiveButterWidget";

export default async function Home({ params }: { params: { id: string } }) {
  return (
    <main className="min-h-screen bg-white mx-auto">
      <Header />
      <GiveButterWidget id={params.id} />
      <Copyright />
    </main>
  );
}
