import React from 'react'
import InsightBox from './InsightBox'

type Props = {}

function GlobalInsightWidget({}: Props) {
  
  const pills = [
     { title: 'HUMANITARIAN RESPONSE', content:'Bringing food, medical care, clean and safe drinking water to the deprived in developing countries.' },
     { title: 'LONG-TERM DEVELOPMENT', content:'We support projects that help people assert their rights and build better lives.' },
     { title: 'ADVOCACY & CAMPAIGNING', content:'Protect and defend the most fundamental right of humankind, the right to life of every human being.' },
  ]
  return (
    <div className="w-full bg-white font-sans">
        <div className="py-6 sm:py-10 sm:pt-6 sm:pb-12 px-4 sm:px-10 sm:mx-auto sm:max-w-7xl flex flex-col space-y-6 sm:space-y-12 justify-center items-center">
            <h2 className="w-1/2 text-2xl sm:text-[2.7rem] text-center font-black leading-tight"> <br/><span className="px-4 py-1 bg-green-700 text-white">The Mission</span></h2>
            <p className='w-[80%] text-xl sm:text-[1.7rem] font-medium text-center leading-relaxed'>Our mission is to alleviate suffering, promote dignity and improve the quality of life for those in need. We are committed to doing compassionate charity work, providing essential resources, support and opportunities that empower individuals and communities to overcome challenges and brighter future. </p>
            <div className='mt-16 mb-6 grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-28'>
                { pills?.map(r => <InsightBox key={r.title} data={r} />)}
            </div>
        </div>
    </div>
  )
}

export default GlobalInsightWidget