import { cn } from '@/lib/utils'
import React from 'react'

type Props = {
    children: React.ReactNode;
    className?: string;
}

function PageContentWrapper({ children, className }: Props) {
  return (
    <div className={cn(`w-full`,className ? className: 'bg-white' )}>
        <div className={`
           px-4 py-6 md:py-20 md:mx-auto md:max-w-6xl font-sans text-base md:text-[1.2rem] leading-7 md:leading-8 md:font-medium 
           [&]:space-y-4 md:[&]:space-y-8
           [&_h1]:text-[1.8rem] md:[&_h1]:text-[2.8rem] [&_h1]:text-[#44841B] [&_h1]:font-black
           [&_h2]:text-[1.2rem] md:[&_h2]:text-[2rem] [&_h2]:text-[#44841B] [&_h2]:font-black
           [&_h3]:text-[1rem] md:[&_h3]:text-[1.55rem] [&_h3]:text-gray-600 [&_h3]:font-medium
           [&_blockquote]:px-6 [&_blockquote]:py-2 [&_blockquote]:border-l-[5px] [&_blockquote]:border-[#61A535]
           [&_a]:text-[#44841B] [&_a]:underline
           [&_br]:block] [&_br]:py-10]

        `}>
           {children}
        </div>
    </div>
  )
}

export default PageContentWrapper