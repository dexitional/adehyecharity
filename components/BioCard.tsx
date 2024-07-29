import React from 'react'
import Image from "next/image";
import Bg from '@/public/b3.jpg'
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { HiExternalLink } from "react-icons/hi";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

type Props = {}

function BioCard({}: Props) {
  return (
    <div className="grid grid-cols-3 gap-14 font-sans">
        <div className="relative h-48">
        <Image src={Bg} alt="" className="object-cover object-center rounded-tr-[15%] rounded-bl-[15%]" fill />
        </div>
        <div className="col-span-2 space-y-6">
        <div className="space-y-4">
            <h1 className="text-[1.7rem] font-black">CAROLINA PALACIOS</h1>
            <p className="text-[1.2rem] text-[#44841B] font-bold tracking-wide">Deputy Executive Director</p>
            <div className="flex item-center space-x-6">
            <button className="flex items-center text-[#44841B]">
                <FaLinkedinIn className="h-4 w-4" />
                <HiExternalLink className="h-4 w-4" />
            </button>
            <button className="flex items-center space-x-0.5 text-[#44841B]">
                <FaXTwitter className="h-4 w-4" />
                <sub className="font-bold"><u>@erinekiley</u></sub>
                <HiExternalLink className="h-4 w-4" />
            </button>
            <button className="flex items-end text-[#44841B]">
                <FaFacebookF className="h-4 w-4" />
                <HiExternalLink className="h-4 w-4" />
            </button>
            </div>
        </div>
        <p className="font-medium text-base">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis rem possimus numquam amet nisi quos, ut tempore veniam? Dicta, autem.</p>
        <div className="w-full">
            <Collapsible className="w-full [&]:transition-all space-y-4">
            <CollapsibleTrigger className="font-bold text-[#44841B] tracking-wide">+ Full Bio</CollapsibleTrigger>
            <CollapsibleContent className="text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, repellat ullam odio inventore, id rerum reiciendis eaque officiis dolor consectetur odit molestias. Amet beatae nobis necessitatibus nostrum corrupti maiores ipsa.
            </CollapsibleContent>
            </Collapsible>
        </div>
        
        </div>
    </div>
  )
}

export default BioCard