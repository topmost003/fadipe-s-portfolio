import img from "../assets/WhatsApp Image 2025-07-23 at 09.12.24_95073c82.jpg"

const About = () => {
  return (
    <div className='flex  justify-between px-[100px] h-[100vh]  pt-[100px] mb-[50px] bg-[#F3F3F3]  gap-8 
    
    max-md:grid  max-md:p-2 max-md:justify-center max-md:mb-[350px]'>

    <main className='w-[400px] h-20 max-md:w-[350px] 
    
    max-md:pb-[400px] max-md:pt-[50px]'>
      <img src={img}alt=""  className="rounded-2xl" />

      <div className='text-center'> 
 <h3 className='font-medium text-2xl'>Abiodun Quadri Fadipe</h3>
      <p className='font-extralight text-3xl'>Fullstack(MERN)</p>

      </div>
    </main>
     

    <main className='max-w-[700px] flex gap-5 flex-col  max-md:text-[15px]   '>
      <h1 className='font-bold text-[4em]'>About me</h1>

      <p className='w-[600px]  max-md:w-[330px]'>I’m a Mechanical Engineering graduate who transitioned into software development with a strong passion for building digital solutions. My background gives me a solid problem-solving mindset, which I now apply to creating efficient, user-friendly applications.
</p>

      <p className='w-[600px]  max-md:w-[330px]'>
I’ve gained hands-on experience with tools like HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, Tailwind CSS, and GitHub. I enjoy working across the full stack to bring ideas to life—from clean frontend interfaces to functional backend systems.
</p>
      
      <p className='w-[600px]  max-md:w-[330px]'>My goal is to work in a role that matches my skills, education, and ambition while contributing meaningfully to a team. I’m committed to ongoing training, professional growth, and maintaining a safe, collaborative work environment that supports organizational success.
</p>
    </main>

     



    </div>
  )
}

export default About
