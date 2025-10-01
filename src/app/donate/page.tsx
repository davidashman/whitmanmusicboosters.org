import DonorboxWidget from '@/components/DonorboxWidget'
import Copyright from '@/components/Copyright'
import Header from '@/components/Header'

export default function Home() {
  return (
    <main className="min-h-screen bg-white mx-auto">
      <Header />

      <div className="max-w-3xl mx-auto text-center font-baro font-bold mb-10">
        <p className="text-3xl text-[#7198C8] mb-6">
          Support Our Music Program
        </p>
        <p className="text-[#1a1a1a] text-lg px-4">
          Your generous donation helps us continue providing exceptional music education opportunities for Whitman students.
        </p>
      </div>

      <DonorboxWidget campaign="fall-fundraising-campaign-2025-2026"/>
      <Copyright />
    </main>
  )
}
