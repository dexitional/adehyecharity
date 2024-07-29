import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { MdDoubleArrow } from 'react-icons/md'

type Props = {
    data: any;
}

function TakeActionBox({ data: { Icon,title,content,label,link } }: Props) {
  return (
    <div className="flex flex-col items-center space-y-2 md:space-y-10">
        <div className="flex flex-col items-center space-y-4 md:space-y-6">
          <div className="relative h-14 md:h-28">
              <Icon className="h-14 w-14 md:h-28 md:w-28 text-[#44841B]"/>
          </div>
          <h1 className="text-lg md:text-3xl font-black">{title}</h1>
        </div>
        <p className="text-base md:text-xl font-medium text-center">{content}</p>
        <Link href={link} className="flex items-center space-x-3 text-[#EE3E02] group transition-all">
            <span className="text-sm md:text-lg font-black transition-all group-hover:scale-125">{label}</span>
            <MdDoubleArrow className="h-6 w-6 transition-all group-hover:translate-x-5" />
        </Link>
    </div>
  )
}

export default TakeActionBox