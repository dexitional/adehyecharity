import React from 'react'
import { MdDoubleArrow } from 'react-icons/md'

type Props = {}

function TakeActionWidget({}: Props) {
  return (
    <div className="w-full bg-white font-sans">
        <div className="px-6 py-20 mx-auto max-w-6xl flex flex-col items-center space-y-10">
            <h1 className="text-4xl font-black flex items-center space-x-3 tracking-wide">
                <span>YOUR TURN —TAKE</span>
                <span className="px-2 pt-2 pb-0.5 bg-[#44841B] text-white">ACTION</span>
            </h1>
            <div className="grid grid-cols-3 gap-10">
               <div className="flex flex-col items-center space-y-10">
                 <div></div>
                 <h1 className="text-3xl font-black">WHY WOMEN’S RIGHTS?</h1>
                 <p className="text-lg font-medium text-center">Understand why gender is the greatest predictor of poverty.</p>
                 <button className="flex items-center space-x-3 text-[#EE3E02] group hover:space-x-4 transition-all">
                    <span className="text-lg font-black transition-all group-hover:text-xl">SEE WHY</span>
                     <MdDoubleArrow className="h-6 w-6" />
                 </button>
               </div>
               <div className="flex flex-col items-center space-y-10">
                 <div></div>
                 <h1 className="text-3xl font-black">WHY WOMEN’S RIGHTS?</h1>
                 <p className="text-lg font-medium text-center">Understand why gender is the greatest predictor of poverty.</p>
                 <button className="flex items-center space-x-3 text-[#EE3E02] group hover:space-x-4 transition-all">
                    <span className="text-lg font-black transition-all group-hover:text-xl">SEE WHY</span>
                     <MdDoubleArrow className="h-6 w-6" />
                 </button>
               </div>
               <div className="flex flex-col items-center space-y-10">
                 <div></div>
                 <h1 className="text-3xl font-black">WHY WOMEN’S RIGHTS?</h1>
                 <p className="text-lg font-medium text-center">Understand why gender is the greatest predictor of poverty.</p>
                 <button className="flex items-center space-x-3 text-[#EE3E02] group hover:space-x-4 transition-all">
                    <span className="text-lg font-black transition-all group-hover:text-xl">SEE WHY</span>
                     <MdDoubleArrow className="h-6 w-6" />
                 </button>
               </div>
            </div>
        </div>
    </div>
  )
}

export default TakeActionWidget