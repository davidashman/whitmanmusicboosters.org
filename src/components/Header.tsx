'use client'

import Image from 'next/image'

export default function Header({ campaign }: {campaign?: string}) {
  const title = campaign ? campaign.replace(/-/g, ' ') : '';
  return (
    <div className="text-center mb-12 py-10 bg-[#1a1a1a] text-4xl font-bold text-[#7198C8] text-center font-baro">
      {title}
      {!campaign && <Image src="/logo.png" alt="Whitman Music Boosters" width={500} height={184} className="mx-auto my-2 h-28 w-auto" />}
    </div>
  )
}
