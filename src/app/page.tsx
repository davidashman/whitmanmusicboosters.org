import DonorboxWidget from '@/components/DonorboxWidget'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1a1a1a]">
      <div className="container mx-auto px-4 py-8">
        {/* Header with Logo */}
        <div className="text-center mb-12">
          <div className="font-baro text-6xl text-[#4FC3F7]">WHITMAN</div>
          <div className="font-baro text-6xl text-white">MUSIC</div>
        </div>

        
        {/* Donation Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 text-center font-baro">
            Support Our Music Program
          </h2>
          <p className="text-blue-100 text-center mb-8 text-lg font-baro">
            Your generous donation helps us continue providing exceptional music education opportunities for Whitman students.
          </p>
          
          {/* Donorbox Integration */}
          <div className="flex justify-center">
            <DonorboxWidget campaign="2025-2026-general-fundraising"/>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-12 text-blue-200">
          <p className="text-sm font-baro">
            © 2024 Whitman Music Boosters. All donations are tax-deductible.
          </p>
        </footer>
      </div>
    </main>
  )
}
