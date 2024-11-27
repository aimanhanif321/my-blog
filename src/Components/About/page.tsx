import React from 'react'

const About = () => {
  return (

    <div id='about'>
      <div className=' w-full  mt-10 mb-16'>
        <div className='flex flex-col sm:flex-col md:flex-row  '>
            <div className=''>
        <img src="/images/about.png" alt="about" className='h-[300px] lg:h-[600px] ' />
        </div>
        <div className='w-full md:w-[60vw] lg:w-[70vw] '>
            <h1 className=' text-center p-5 m-9 bg-blue-900 font-serif font-bold text-2xl md:text-4xl lg:text-6xl text-white items-center'>ABOUT</h1>
<h1 className='font-serif font-bold text-2xl md:text-4xl lg:text-6xl text-blue-900'>
What is Chikungunya?</h1>
        <p className='pt-6 leading-2 font-sans text-2xl md:text-3xl '>Chikungunya is a viral disease caused by the Chikungunya virus (CHIKV), which is transmitted to humans through the bites of infected mosquitoes, primarily Aedes aegypti and Aedes albopictus. These mosquitoes are the same vectors responsible for spreading dengue and Zika viruses.</p>
        <div className='pt-10 py-8'>
            <h1 className=' font-serif font-bold text-2xl md:text-4xl lg:text-5xl text- text-blue-900'>Origin and History</h1>
            <p className='pt-6 leading-2 font-sans text-2xl md:text-3xl'>The name <b>"Chikungunya"</b> is derived from the Makonde language, meaning "that which bends up," referring to the bent posture of sufferers due to severe joint pain.
            First identified in 1952 in Tanzania, the virus has since caused outbreaks across Africa, Asia, the Americas, and Europe.</p></div></div>
      </div>
      </div>
      </div>
    
  )
}

export default About
