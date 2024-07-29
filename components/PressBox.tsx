import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import Bg from '@/public/b2.jpg'

type Props = {
    title: string;
    link: string;
    category: string;
    categoryLink: string;
    publishedAt: string;
}

function PressBox({ title, link, category, categoryLink, publishedAt }: Props) {
  return (
    <div className="px-6 pt-6 pb-10 bg-white flex justify-between">
        <div className="flex flex-col space-y-6">
            <div className="-ml-12 flex items-center space-x-6">
                <div className="px-4 py-2 bg-[#44841B]">
                <Link href={categoryLink} className="text-white text-sm hover:underline">{category}</Link>
                </div>
                <span className="text-sm font-medium">{publishedAt}</span>
            </div>
            <Link href={link} className="text-xl font-bold underline hover:text-[#44841B]">{title}</Link>
        </div>
        <div className="relative w-40 h-28 bg-red-100 rounded">
            <Image src={Bg} alt="" className="object-cover object-center rounded" fill  />
        </div>
        
    </div>
  )
}

export default PressBox