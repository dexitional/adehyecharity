import React from 'react'
import Logo from '../public/logo_orange.png'

type Props = {}

function LogoFoot({}: Props) {
  return (
    <div className="flex space-x-6">
        <img src={Logo.src} alt="" className="relative h-20 "/>
        <div className="pt-0 flex flex-col ">
            <div className="flex flex-col -space-y-0.5 font-sans font-black tracking-wider">
                <span className="text-4xl text-orange-200 tracking-[0.25em]">ADEHYE</span>
                <span className="text-sm tracking-widest text-orange-200">CHARITY ORGANIZATION</span>
            </div>
            <span className="text-xs text-amber-200/90 font-sans font-bold  tracking-wider">** the Art of Caring **</span>
        </div>
    </div>
  )
}

export default LogoFoot