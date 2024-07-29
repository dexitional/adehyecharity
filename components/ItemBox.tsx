import Image from 'next/image'
import React from 'react'
import Bg from '@/public/b3.jpg'
import Link from 'next/link';

type Props = {
   title: string;
   content: string;
   label?: string;
   link?: string;
}

function ItemBox({ title, content, label, link }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative h-48 md:h-full">
            <Image src={Bg} alt="" className="object-cover object-center" fill />
        </div>
        <div className="p-6 md:p-14 flex flex-col space-y-4 md:space-y-8 bg-white">
          <h1 className="text-2xl md:text-[2.5rem] font-black text-[#44841B] leading-tight">{title}</h1>
          <p className="pb-4 text-base md:text-lg font-medium">{content}</p>
          { label && link &&  <Link href={link} className="px-6 py-2 w-fit bg-[#44841B] text-white">{label}</Link> }
        </div>
    </div>
  )
}

export default ItemBox