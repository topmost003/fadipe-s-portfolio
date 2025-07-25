import React from 'react'

const Contact = () => {
  return (
    <div  className='px-[170px]  h-[80vh] py-30  bg-[#F8F8F8]  max-md:text-center max-md:px-1'>
      <h1 className='font-bold text-6xl text-center max-md:pb-8'>Contact</h1>


      <div className=' pt-10 flex justify-between max-md:grid  max-md:p-0 max-md:justify-center max-md:gap-4' >

      <main  className='w-[300px] h-[120px] border-2 p-5 rounded-2xl bg-black text-white'>
        <h3 className='font-medium text-3xl pb-4'>Address</h3>
        <p>oreyo,ikorodu,west africa</p>
      </main>

      <main className='w-[300px] h-[120px] border-2 p-5 rounded-2xl bg-black text-white'>
         <h3 className='font-medium text-3xl pb-4'>Email us</h3>
        <a href="mailto:adetayoabiodun003@gamil.com">abiodunadetayo@gmail.com</a>
       
      </main>

      <main className='w-[300px] h-[120px]  border-2 p-5 rounded-2xl bg-black text-white'>
        <h3 className='font-medium text-3xl pb-4'>Call Us</h3>
         <a href="tel:+2348160068783"> +2348160068783</a>
      </main>

  </div>


     
    </div>
  )
}

export default Contact
