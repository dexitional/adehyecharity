import React from 'react'
import Logo from '@/public/logo_orange.png'
import Image from 'next/image'

type Props = {}

function NewsTitle({}: Props) {
  return (
    <div className="w-full bg-red-50">
        <div className="px-4 py-14 md:mx-auto md:max-w-6xl font-sans grid grid-cols-2 gap-4">
             <div className="flex flex-col space-y-10">
                <h1 className="text-[2rem] font-bold ">NEWSROOM</h1>
                <p className="text-xl font-medium">Real stories from the frontlines of ending the injustice of poverty for women and girls.</p>
             </div>
             <div className="flex flex-col justify-center items-center space-y-4">
                <div className="p-3 relative h-28 w-28">
                    <Image src={Logo} alt="Logo" className="object-contain" fill />
                </div>
                <div className="flex flex-col justify-center items-center -space-y-1"> 
                    <h2 className="text-[#F9DBBD] text-2xl font-black">MEDIA INQUIRIES</h2>
                    <p className="font-bold text-sm text-red-800/50">media@adehyecharity.com</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewsTitle