import React from 'react'

type Props = {}

function FooterBottom({}: Props) {
  return (
    <div className="w-full bg-[#0C884A]">
        <div className="px-5 py-6 sm:mx-auto w-full sm:h-16 sm:max-w-5xl text-white font-sans text-sm flex flex-col space-y-8 sm:space-y-0 sm:flex-row sm:items-center sm:justify-between">
            <span>Charitable Registration No. 321654987 RR0009</span>
            <nav className="flex flex-col sm:flex-row sm:items-center sm:justify-center space-y-2 sm:space-y-0 sm:space-x-10 font-medium text-sm underline">
                <div>Privacy Policy</div>
                <div>Accessibility</div>
                <div>About Us</div>
            </nav>
            <span>© {new Date().getFullYear()} Adehye Charity Organization</span>
        </div>
    </div>
  )
}

export default FooterBottom