'use client'

import { useEffect } from 'react'

export default function DonorboxWidget({campaign}: {campaign: string}) {
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

  return (
    <div className="w-full max-w-md pl-6 pr-3">
      <iframe 
        src={`https://donorbox.org/embed/${campaign}`} 
        name="donorbox" 
        frameBorder="0" 
        scrolling="no" 
        height="900px" 
        width="100%"
        className="rounded-xl max-w-[500px] min-w-[250px] min-h-[700px] max-h-[800px] bg-white"
        title="Whitman Music Boosters Donation Form"
      ></iframe>
    </div>
  )
}
