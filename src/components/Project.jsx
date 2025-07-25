import link from "../assets/link.png"


const Project = () => {
 
  return (
    <div className="pt-[100px] bg-[#F3F3F3]  max-md:pb-[70px] ">
   <h1 className='font-bold text-6xl text-center pb-10 '>Project</h1>

  
  <section className="grid grid-cols-3 gap-5 px-[100px] py-12 max-md:grid  max-md:grid-cols-1  max-md:p-0 max-md:px-5 max-md:items-center">

   <main className=" bg-white text-black w-full h-[150px] rounded-2xl p-3.5 ">
   <div className="flex gap-3 pb-5">
    <h3>Project : About Meta clone </h3>    
   <a href=""><img src={link} alt="" className="w-5" /></a>
   </div>
    <p>Languages :  Html5 ,css3 </p>
  </main>


   <main className=" bg-white text-black w-full h-[150px] rounded-2xl p-3.5">
   <div className="flex gap-3 pb-7">
    <h3>Project : Piggyvest clone </h3>    
   <a href=""><img src={link} alt="" className="w-5" /></a>
   </div>
    <p>Languages :  Html5 ,css3 </p>
  </main>

   <main className=" bg-white text-black w-full h-[150px] rounded-2xl p-3.5">
   <div className="flex gap-3 pb-7">
    <h3>Project : Colors clone </h3>    
   <a href=""><img src={link} alt="" className="w-5" /></a>
   </div>
    <p>Languages :  Html5 ,css3 </p>
  </main>

   <main className=" bg-white text-black w-full h-[150px] rounded-2xl p-3.5">
   <div className="flex gap-3 pb-7">
    <h3>Project : Basic Counter </h3>    
   <a href=""><img src={link} alt="" className="w-5" /></a>
   </div>
    <p>Languages :  Html5 ,css3 ,Javascript </p>
  </main>

   <main className=" bg-white text-black w-full h-[150px] rounded-2xl p-3.5">
   <div className="flex gap-3 pb-7">
    <h3>Project : Calculator </h3>    
   <a href=""><img src={link} alt="" className="w-5" /></a>
   </div>
    <p>Languages :  Html5 ,css3 ,Javascript </p>
  </main>


   <main className=" bg-white text-black w-full h-[150px] rounded-2xl p-3.5">
   <div className="flex gap-3 pb-7">
    <h3>Project : Piggyvest </h3>    
   <a href=""><img src={link} alt="" className="w-5" /></a>
   </div>
    <p>Languages : React , Tailwind </p>
  </main>


  </section>

    </div>
  )
}

export default Project
