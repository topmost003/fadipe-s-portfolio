import icon from "../assets/link.png"

const Home = () => {

  return (
    <div className=' h-[100vh] bg-[#AAA08D] z-50 pt-20  text-black flex flex-col justify-center items-center cursor-cell max-md:text-center max-md:w-full max-md:h-[60vh] '>


      <h1>Hi, i'm<span   className='font-bold text-[50px] px-2'>Abiodun Quadri Fadipe</span></h1>
      

      <div className="flex gap-4 items-center max-md:w-[400px] max-md:justify-center ">
<p className='font-extralight text-2xl  hover:translate-y-1 max-md:text-[16px] max-md:font-medium ' >Software Developer</p>
 <a href="https://github.com/topmost003"><img src={icon} alt="" className="w-5" /></a>
      </div>
  
    </div>
  )
}

export default Home  
