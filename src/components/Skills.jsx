import React from 'react'

const Skills = () => {
  return (
    <div className='h-[150vh] py-25' >
         <h1 className='text-center font-bold text-6xl  pb-5'>Skills</h1>

         <main className=' grid grid-cols-4  items-center px-[100px] '>
          <img src="../../public/html.svg" alt="html"  className=' w-[150px] h-[150px] hover:-translate-y-px'/>
          <img src="../../public/css.svg" alt="css"  className=' w-[150px] h-[150px] hover:-translate-y-px'/>
          <img src="../../public/github.svg" alt="github"  className=' w-[150px] h-[80px] hover:-translate-y-px'/>
          <img src="../../public/javascript.svg" alt="javascript"  className=' w-[150px] h-[120px] hover:-translate-y-px'/>
          <img src="../../public/typescript.svg" alt="typescript"  className=' w-[150px] h-[120px] hover:-translate-y-px'/>
          <img src="../../public/react.svg" alt="react"  className=' w-[150px] h-[150px] hover:-translate-y-px'/>
          <img src="../../public/download.png" alt="tailwind"  className=' w-[200px] h-[100px] hover:-translate-y-px'/>
          <img src="../../public/nodejs.svg" alt="nodejs"  className=' w-[100px] h-[150px] hover:-translate-y-px'/>

            <img src="../../public/mongodb.svg" alt="mongodb" className=' w-[150px] h-[150px] hover:-translate-y-px'/>
          <img src="../../public/136-1363736_express-js-icon-png-transparent-png.png" alt="expressjs"  className=' w-[100px] h-[80px] hover:-translate-y-px'/>

          <img src="../../public/json.svg" alt="json"  className=' w-[150px] h-[120px] hover:-translate-y-px'/>

          <img src="../../public/npm.svg" alt="expressjs"  className=' w-[150px] h-[150px] hover:-translate-y-px'/>

      
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
