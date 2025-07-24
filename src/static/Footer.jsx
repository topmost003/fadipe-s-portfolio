import facebook from "../assets/facebook (1).png"
import instagram from "../assets/social (1).png"
import twitter from "../assets/twitter (1).png"
import linkedin from "../assets/linkedin.png"





const Footer = () => {
  return (
    <div className='text-center py-2.5 bg-[#F3F3F3]'>
    <p>© Copyright Fadipe All Rights Reserved</p>

    <div className='flex justify-center  gap-5 pt-4'>
      <a href=""><img src= {facebook}     alt="" className='w-[40px] h-[40px]'  /></a>
      <a href=""><img src= {instagram}     alt=""  className='w-[40px] h-[40px]'   /></a>
      <a href=""><img src= {twitter}    alt="" className='w-[40px] h-[40px]'   /></a>
      <a href=""><img src=  {linkedin}   alt=""    className='w-[40px] h-[40px]'   /></a>  
    </div>



    <div>
      <a href="https://wa.me/qr/ZDISPB3JXDDYD1"><img src="../../public/whatsapp.png" alt=""  className='w-[60px] h-[60px] fixed bottom-2 right-10' /></a>  
    </div>
    </div>
  )
}

export default Footer 
