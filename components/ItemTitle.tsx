import React from 'react'

type Props = {
    title: string;
}

function ItemTitle({ title }: Props) {
  return (
    <h1 className="py-2 text-[1.65rem] font-black text-center text-[#44841B]">{title}</h1>
  )
}

export default ItemTitle