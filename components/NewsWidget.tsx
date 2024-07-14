import Image from 'next/image'
import React from 'react'
import { ImPriceTag } from "react-icons/im";
import FeaturedImage from '../public/pablo.jpg'
type Props = {}

function NewsWidget({}: Props) {
  return (
    <div className="w-full font-sans">
        <div className="py-20 px-10 sm:mx-auto sm:max-w-7xl grid grid-cols-1 sm:grid-cols-3 gap-10">
            
            
              <div className="mb-52 relative h-64 ">
                <Image src={FeaturedImage} alt="" className="object-cover" fill/> 
                <div className="px-4 w-[94%] absolute left-3 top-56 flex flex-col space-y-3 bg-white/90">
                    <div className="py-1 flex items-center space-x-2">
                        <ImPriceTag className="w-3 h-3" />
                        <span className="text-sm font-medium line-clamp-3">Looking good</span>
                    </div>
                    <h1 className="text-lg font-black leading-6 text-[#44841B]">DELIVERING AID IN GHANA: YOUR QUESTIONS ANSWERED </h1>
                    <p className="text-base font-medium line-clamp-4">After eight months of conflict, delivering aid to the millions of Africans trapped in the poverty remains an insurmountable challenge. Alongside our efforts to advocate for support, it…</p>
                    <div className="pb-4 text-xs font-bold">by ACO | June 21, 2024</div>
                </div> 
              </div>

              <div className="mb-48 relative h-64 ">
                <Image src={FeaturedImage} alt="" className="object-cover" fill/> 
                <div className="px-4 w-[94%] absolute left-3 top-56 flex flex-col space-y-3 bg-white/90">
                    <div className="py-1 flex items-center space-x-2">
                        <ImPriceTag className="w-3 h-3" />
                        <span className="text-sm font-medium line-clamp-3">Looking good</span>
                    </div>
                    <h1 className="text-lg font-black leading-6 text-[#44841B]">DELIVERING AID IN GHANA: YOUR QUESTIONS ANSWERED </h1>
                    <p className="text-base font-medium line-clamp-4">After eight months of conflict, delivering aid to the millions of Africans trapped in the poverty remains an insurmountable challenge. Alongside our efforts to advocate for support, it…</p>
                    <div className="pb-4 text-xs font-bold">by ACO | June 21, 2024</div>
                </div> 
              </div>

              <div className="mb-48 relative h-64 ">
                <Image src={FeaturedImage} alt="" className="object-cover" fill/> 
                <div className="px-4 w-[94%] absolute left-3 top-56 flex flex-col space-y-3 bg-white/90">
                    <div className="py-1 flex items-center space-x-2">
                        <ImPriceTag className="w-3 h-3" />
                        <span className="text-sm font-medium line-clamp-3">Looking good</span>
                    </div>
                    <h1 className="text-lg font-black leading-6 text-[#44841B]">DELIVERING AID IN GHANA: YOUR QUESTIONS ANSWERED </h1>
                    <p className="text-base font-medium line-clamp-4">After eight months of conflict, delivering aid to the millions of Africans trapped in the poverty remains an insurmountable challenge. Alongside our efforts to advocate for support, it…</p>
                    <div className="pb-4 text-xs font-bold">by ACO | June 21, 2024</div>
                </div> 
              </div>

        </div>
    </div>
  )
}

export default NewsWidget