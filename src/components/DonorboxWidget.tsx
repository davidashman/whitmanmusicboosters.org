'use client'

import { useEffect } from 'react'

export default function DonorboxWidget({campaign, title}: {campaign: string, title?: string}) {
  useEffect(() => {
    // Load Donorbox script
    const script = document.createElement('script')
    script.src = 'https://donorbox.org/widget.js'
    script.async = true
    script.setAttribute('paypalExpress', 'false')
    document.head.appendChild(script)

    return () => {
      // Cleanup script when component unmounts
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])

  const titleText = title ? title : campaign.replace(/(?<!\d)-|-(?!\d)/g, ' ');

  return (
    <div className="flex flex-col justify-center max-w-3xl mx-auto w-full max-w-md px-3 my-8">
      <p className="text-xl font-bold mb-4 text-center font-baro text-[#7198C8]">{titleText}</p>
      <iframe 
        src={`https://donorbox.org/embed/${campaign}`} 
        name="donorbox" 
        frameBorder="0" 
        scrolling="no" 
        height="900px" 
        width="100%"
        className="max-w-[500px] min-w-[250px] min-h-[600px] bg-white"
        title="Whitman Music Boosters Donation Form"
      ></iframe>
    </div>
  )
}
