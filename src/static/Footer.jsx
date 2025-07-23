import React from 'react'

const Footer = () => {
  return (
    <div className='text-center'>
    <p>© Copyright Fadipe All Rights Reserved</p>

    <div className='flex justify-center  gap-5 pt-5'>
      <a href=""><img src="../../public/facebook (1).png" alt="" className='w-[40px] h-[40px]'  /></a>
      <a href=""><img src="../../public/social (1).png" alt=""  className='w-[40px] h-[40px]'   /></a>
      <a href=""><img src="../../public/twitter (1).png" alt="" className='w-[40px] h-[40px]'   /></a>
      <a href=""><img src="../../public/linkedin.png" alt=""    className='w-[40px] h-[40px]'   /></a>  
    </div>



    <div>
      <a href="https://wa.me/qr/ZDISPB3JXDDYD1"><img src="../../public/whatsapp.png" alt=""  className='w-[60px] h-[60px] fixed bottom-2 right-10' /></a>  
    </div>
    </div>
  )
}

export default Footer
