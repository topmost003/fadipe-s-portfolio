import { useState } from "react"
import img from "../assets/WhatsApp Image 2025-07-23 at 09.12.24_95073c82.jpg"
import menu from "../assets/menu new.png"
import arrow from "../assets/cancel.png"
import Sidebar from "./Sidebar"

const Header = () => {
 
  const [toggle ,setToggle] = useState (false)

  const SwitchToggle = ()=>{
    setToggle(!toggle)
  }


  return (
    <div>
    <div   className="flex justify-between bg-black text-white h-[80px] py-3 fixed items-center border-b-amber-50 border-b-[0.5px] 
  
      max-w-full w-full
       px-[200px] 
  
      max-md:px-[50px] max-md:h-[53px]"  
>

        <a href="#home"><img src={img} alt="" className="w-[100px] h-[70px]  
        hover:-translate-1 max-md:h-[50px] max-md:w-[80px]" /></a>


        <div className="flex gap-15 max-md:hidden">
        <a href="#about" className="hover:text-[#FF7F50] ">About</a>
        <a href="#project" className="hover:text-[#FF7F50] ">Project</a>
        <a href="#skills" className=" hover:text-[#FF7F50] ">Skills</a>
        <a href="#contact" className="hover:text-[#FF7F50]  ">Contact</a>
        </div>



      <section className=" min-md:hidden">
        <div className=" w-[30px] min-md:hidden" onClick={SwitchToggle}> 
      {toggle? <img src={arrow}alt=""  /> : <img src={menu} alt="" /> }
        </div>

        <div >
          {toggle && <Sidebar/>}
        </div>
        </section>
     
       </div>

  


</div>
  )
}

export default Header 
