import DonorboxWidget from '@/components/DonorboxWidget'
import Copyright from '@/components/Copyright'
import Header from '@/components/Header'

export default function Home({ params }: { params: { id: string } }) {
  return (
    <main className="min-h-screen bg-white mx-auto">
      <Header />
      <DonorboxWidget campaign={params.id}/>
      <Copyright />
    </main>
  )
}
