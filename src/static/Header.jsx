import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="w-[1024px]">
    <main className=" flex justify-between bg-black text-white h-[80px]
     py-3  w-full fixed  items-center px-[100px] border-b-amber-50 border-b-[0.5px]">


        <a href="#home"><img src="../../public/WhatsApp Image 2025-07-23 at 09.12.24_95073c82.jpg" alt="" className="w-[100px] h-[70px] hover:-translate-1" /></a>


        <div className="flex gap-15">
        <a href="#about" className="hover:text-[#FF7F50] ">About</a>
        <a href="#project" className="hover:text-[#FF7F50] ">Project</a>
        <a href="#skills" className=" hover:text-[#FF7F50] ">Skills</a>
        <a href="#contact" className="hover:text-[#FF7F50]  ">Contact</a>
  

</div>

  
         
    </main>
    </div>
  )
}

export default Header 
