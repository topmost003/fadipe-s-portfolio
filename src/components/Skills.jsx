import html from "../assets/html.svg"
import css from "../assets/css.svg"
import github from "../assets/github.svg"
import javascript from "../assets/javascript.svg"
import typescript from "../assets/typescript.svg"
import react from "../assets/react.svg"
import tailwind from "../assets/download.png"
import nodejs from "../assets/nodejs.svg"
import mongodb from "../assets/mongodb.svg"
import express from "../assets/136-1363736_express-js-icon-png-transparent-png.png"
import json from "../assets/json.svg"
import npm from "../assets/npm.svg"

const Skills = () => {
  return (
    <div className='h-[150vh] py-25' >
         <h1 className='text-center font-bold text-6xl  pb-5'>Skills</h1>

         <main className=' grid grid-cols-4  items-center px-[100px] '>
          <img src={html} alt="html"  className=' w-[150px] h-[150px] hover:-translate-y-px'/>
          <img src={css} alt="css"  className=' w-[150px] h-[150px] hover:-translate-y-px'/>
          <img src={github} alt="github"  className=' w-[150px] h-[80px] hover:-translate-y-px'/>
          <img src={javascript} alt="javascript"  className=' w-[150px] h-[120px] hover:-translate-y-px'/>
          <img src={typescript} alt="typescript"  className=' w-[150px] h-[120px] hover:-translate-y-px'/>
          <img src={react} alt="react"  className=' w-[150px] h-[150px] hover:-translate-y-px'/>
          <img src={tailwind} alt="tailwind"  className=' w-[200px] h-[100px] hover:-translate-y-px'/>
           <img src={nodejs} alt="nodejs"  className=' w-[100px] h-[150px] hover:-translate-y-px'/>
            <img src={mongodb} alt="mongodb" className=' w-[150px] h-[150px] hover:-translate-y-px'/>

          <img src={express} alt="expressjs"  className=' w-[100px] h-[80px] hover:-translate-y-px'/>
          <img src={json} alt="json"  className=' w-[150px] h-[120px] hover:-translate-y-px'/>

          <img src={npm} alt="expressjs"  className=' w-[150px] h-[150px] hover:-translate-y-px'/>

      
        </main>

        <div className='py-[100px]'>
            <h1 className='text-center font-bold text-6xl'>Tool</h1>

          <main className='flex justify-center' >
            <img src="../../public/vscode.svg" alt="vscode"  className=' w-[100px] h-[120px] hover:-translate-y-px' />
         
          </main>
        </div>

       
        
       
      
    </div>
  )
}

export default Skills
