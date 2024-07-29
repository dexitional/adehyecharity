import React from 'react'
import { MdCampaign, MdDoubleArrow } from 'react-icons/md'
import IC1 from '../public/icon_donate.svg';
import IC2 from '../public/icon_megaphone.svg';
import IC3 from '../public/icon_womensrights.svg';
import { BiSolidDonateHeart } from "react-icons/bi";
import TakeActionBox from './TakeActionBox';
import { ImManWoman } from 'react-icons/im';
type Props = {}

function TakeActionWidget({}: Props) {

  const data = [
    { title: 'WHY WOMEN’S RIGHTS?', Icon: ImManWoman, content: 'Understand why gender is the greatest predictor of poverty.', label: 'SEE WHY', link: '#' },
    { title: 'JOIN A CAMPAIGN', Icon: MdCampaign, content: 'Your voice is powerful, use it to advocate for women’s rights.', label: 'FIND A CAMPAIGN ', link: '#' },
    { title: 'DONATE NOW', Icon: BiSolidDonateHeart, content: 'Help us be there for women and girls when crises strike.', label: 'PITCH IN ', link: '#' },
  ]
     
  return (
    <div className="w-full bg-white font-sans">
        <div className="px-4 py-10 md:px-6 md:py-28 md:mx-auto md:max-w-7xl flex flex-col items-center space-y-6 md:space-y-14">
            <h1 className="text-2xl md:text-5xl font-black flex items-center space-x-1.5 md:space-x-3 tracking-wide">
                <span>YOUR TURN —TAKE</span>
                <span className="px-1 pt-0.5 md:px-2 sm:pt-2 sm:pb-0.5 bg-[#44841B] text-white">ACTION</span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-24">
               { data?.map(r => (<TakeActionBox key={r.title} data={r} />))}
            </div>
        </div>
    </div>
  )
}

export default TakeActionWidget