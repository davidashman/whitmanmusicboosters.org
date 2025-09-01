import DonorboxWidget from '@/components/DonorboxWidget'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto">
        {/* Header with Logo */}
        <div className="text-center mb-12 pt-8 pb-10 bg-[#1a1a1a]">
          <div className="font-baro text-6xl text-[#4FC3F7]">WHITMAN</div>
          <div className="font-baro text-6xl text-white">MUSIC</div>
        </div>

        {/* Donation Section */}
        <div className="bg-white/10 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#4FC3F7] mb-6 text-center font-baro">
            Support Our Music Program
          </h2>
          <p className="text-[#1a1a1a] text-center mb-8 text-lg font-baro pl-4 pr-4">
            Your generous donation helps us continue providing exceptional music education opportunities for Whitman students.
          </p>
          
          {/* Donorbox Integration */}
          <div className="flex justify-center">
            <DonorboxWidget campaign="fall-fundraising-campaign-2025-2026"/>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center pt-12 pb-10 text-[#1a1a1a] pl-4 pr-4">
          <p className="text-sm font-baro">
            © 2025 Whitman Music Boosters. All donations are tax-deductible.
          </p>
        </footer>
      </div>
    </main>
  )
}
