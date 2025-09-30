import DonorboxWidget from '@/components/DonorboxWidget'

export default function Home({ params }: { params: { id: string } }) {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto">
        {/* Header with Logo */}
        <div className="text-center mb-12 py-10 bg-[#1a1a1a]">
          <div className="text-4xl font-bold text-[#7198C8] text-center font-baro">
            {params.id.replace(/-/g, ' ')}
          </div>
        </div>

        {/* Donation Section */}
        <div className="bg-white/10 max-w-3xl mx-auto">
          {/* Donorbox Integration */}
          <div className="flex justify-center">
            <DonorboxWidget campaign={params.id}/>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center pt-12 pb-10 text-[#1a1a1a] px-4">
          <p className="text-sm font-baro">
            © 2025 Whitman Music Boosters. All donations are tax-deductible.
          </p>
        </footer>
      </div>
    </main>
  )
}
