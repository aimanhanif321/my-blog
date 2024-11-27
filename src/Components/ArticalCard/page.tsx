import React from 'react'
import Link from 'next/link'
type props = {
    artical :{
        id:number,
        authur:string,
        title:string,
        publish:string
        image:string
        url:string,
    }
}
const ArticalCard = ({artical}:props) => {
    const {id,title,image,authur,publish} = artical

  return (
    <div className='p-2 hover:bg-yellow-200 duration-300 transition-all cursor-pointer text-center  overflow-hidden mx-auto'>
         <Link href={artical.url} target="_blank">
      <img src={image} alt={title}  className="w-full h-[400px] object-cover mx-auto"/>

      <h1 className=' mt-4 text-[32px] font-bold '>{title}</h1>
      <h3 className='text-[22px] text-gray-600'>By: {authur}</h3>
      <h3 className='text-[18px] text-gray-600'>Published: {publish}</h3>
      </Link>
    </div>
  )
}

export default ArticalCard
