import React from 'react'
import Link from 'next/link';
type Props = {
    title: string;
    subtitle: string;
    label?: string;
    link?: string;
    image?: string;
}

function PageTitleCover({ title,subtitle,label,link}: Props) {
  return (
    <div className={`w-full bg-gray-700 shadow-[0px_-2px_4px_#000cc] bg-url`}>
        <div className="px-4 py-4 md:mx-auto md:h-[36rem] md:max-w-6xl grid grid-cols-2 font-sans">
          <div className="h-56 md:h-[32rem] flex flex-col justify-center space-y-3 md:space-y-5 font-sans text-white">
            <h1 className="text-xl md:text-6xl font-black uppercase">{title}</h1>
            <p className="text-lg font-medium">{subtitle}</p>
            { label && link &&  
            <Link href={link}  className="px-4 py-1.5 md:px-6 md:py-3 w-fit bg-[#336113] text-white">
               <span className="md:font-medium text-xs md:text-xl">{label} </span>
            </Link>
            }
          </div>
        </div>
    </div> 
  )
}

export default PageTitleCover