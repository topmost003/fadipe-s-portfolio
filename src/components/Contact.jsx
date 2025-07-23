import React from 'react'

const Contact = () => {
  return (
    <div  className='px-[100px]  h-[100vh] py-30'>
      <h1 className='font-bold text-6xl text-center'>Contact</h1>


      <div className=' pt-10 flex justify-between' >

      <main  className='w-[300px] h-[120px] border-2 p-5 rounded-2xl bg-black text-white'>
        <img src="" alt="" />
        <h3 className='font-medium text-3xl pb-4'>Address</h3>
        <p>oreyo,ikorodu,west africa</p>
      </main>

      <main className='w-[300px] h-[120px] border-2 p-5 rounded-2xl bg-black text-white'>
        <img src="" alt="" />
         <h3 className='font-medium text-3xl pb-4'>Email us</h3>
        <a href="mailto:adetayoabiodun003@gamil.com">abiodunadetayo@gamil.com</a>
       
      </main>

      <main className='w-[300px] h-[120px]  border-2 p-5 rounded-2xl bg-black text-white'>
        <img src="" alt="" />
        <h3 className='font-medium text-3xl pb-4'>Call Us</h3>
         <a href="tel:+2348160068783"> +2348160068783</a>
      </main>

  </div>

     
    </div>
  )
}

export default Contact
