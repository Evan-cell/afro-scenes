import request from '@/utils/request';
import React from 'react'

function HeaderItem({Icon, title}) {
  return (
    <div className='flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-white  group'>
        {Icon && <Icon className='h-8 text-white mb-1 group-hover:animate-bounce' />}
        <p className='text-white tracking-widest opacity-0 group-hover:opacity-100'>{title}</p>
    </div>
  )
}

export default HeaderItem


