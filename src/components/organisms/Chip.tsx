import { IChips } from '@/models/setting.model'
import React from 'react'
interface Props {
  outputEvent: Function
  item: IChips
}
export default function Chip({ outputEvent, item }: Props) {

  return (
    <div className={`center relative inline-block select-none whitespace-nowrap rounded-lg ${item.color} py-2 px-3.5 align-baseline font-sans text-xs font-bold leading-none text-white`}>
      {item.name}
      <span onClick={() => outputEvent(item.name)} className='absolute text-center pt-[1px] top-[-5px] right-[-4px] rounded-full w-[15px] h-[15px] border-none bg-[#3d3d3d] cursor-pointer'>
        x
      </span>
    </div>
  )
}