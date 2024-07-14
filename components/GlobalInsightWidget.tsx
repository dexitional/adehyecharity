import React from 'react'
import InsightBox from './InsightBox'

type Props = {}

function GlobalInsightWidget({}: Props) {
  
  const pills = [
     { title: 'HUMANITARIAN RESPONSE', content:'We provide emergency aid when disaster strikes or conflict breaks out.' },
     { title: 'LONG-TERM DEVELOPMENT', content:'We support projects that help people assert their rights and build better lives.' },
     { title: 'ADVOCACY & CAMPAIGNING', content:'We work to change the laws and practices that perpetuate inequality and keep people trapped in poverty.' },
  ]
  return (
    <div className="w-full bg-white font-sans">
        <div className="py-10 sm:py-28 px-4 sm:px-10 sm:mx-auto sm:max-w-7xl flex flex-col space-y-12 justify-center items-center">
            <h2 className="w-1/2 text-[2.7rem] text-center font-black leading-tight ">ENDING POVERTY. FIGHTING INEQUALITY. TOGETHER. <span className="px-4 py-1 bg-green-700 text-white">lookings</span></h2>
            <p className='w-4/5 text-[1.7rem] font-medium text-center'>Oxfam is a global organization working to end the injustice of poverty and inequality by focusing on women’s rights. That’s why at Oxfam Canada, we work in three critical areas:</p>
            <div className='mt-10 grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-28'>
                { pills?.map(r => <InsightBox key={r.title} data={r} />)}
            </div>
        </div>
    </div>
  )
}

export default GlobalInsightWidget