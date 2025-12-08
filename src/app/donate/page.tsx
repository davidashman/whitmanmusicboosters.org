import DonorboxWidget from '@/components/DonorboxWidget'
import Copyright from '@/components/Copyright'
import Header from '@/components/Header'
import SupportMessage from '@/components/SupportMessage'

export default function Home() {
  const campaign = process.env.NEXT_PUBLIC_HOME_CAMPAIGN || '2025-2026-general-fundraising';

  return (
    <main className="min-h-screen bg-white mx-auto">
      <Header />
      <SupportMessage />
      <DonorboxWidget campaign={campaign} />
      <Copyright />
    </main>
  )
}
