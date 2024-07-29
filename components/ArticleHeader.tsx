import React from 'react'

type Props = {
    title: string;
    publishedAt: string
}

function ArticleHeader({ title, publishedAt }: Props) {
  return (
    <div className="w-full bg-red-50">
       <div className="px-4 md:py-16 py-10 md:mx-auto md:max-w-6xl font-sans flex flex-col items-center justify-center space-y-4">
        <h1 className="text-xl md:text-4xl text-gray-800 font-bold text-center leading-snug">{title}</h1>
        <p className="text-sm md:text-base">{publishedAt}</p>     
       </div>
    </div>
  )
}

export default ArticleHeader