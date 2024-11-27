import React from 'react'
import ArticalData from '../ArticalData/page'
import ArticalCard from '../ArticalCard/page'

const Articals = () => {
  return (
    <div>
      <div id='articals'>
        <h1 className='text-center p-5 m-2  font-serif font-bold text-2xl md:text-4xl lg:text-6xl text-blue-800 items-center'>Articals</h1>
        <div className='mt-20 w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 items-center'>
        {ArticalData.map((artical) =>{
          return(
          <div key={artical.id}>
           <ArticalCard artical={ artical}/>
          </div>

          )
        })}
        </div>
      </div>
    </div>
  )
}

export default Articals
