import React from 'react'
import LogoFoot from './LogoFoot'

type Props = {}

function FooterSideRight({}: Props) {
  return (
    <div className="sm:px-10 sm:min-h-48 sm:min-w-[25rem]">
        <div className="flex flex-col space-y-10 ">
            <LogoFoot />
            <p className="text-orange-100 sm:text-orange-100/90 font-bold">Adehye Charity Organization (ACO) is a registered international charity organization committed to assisting impoverished communities in Africa and other parts of the World.</p>
        </div>
        <div></div>
    </div>
  )
}

export default FooterSideRight