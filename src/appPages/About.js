import React from 'react'
import "../App.css"

const About = () => {
  document.title = "Groceries - ABOUT"
  return (
    <div className='bg-slate-200 p-2 md:p-4 flex justify-center'>
      <div className='rounded-full flex justify-center hover:bg-slate-500 p-2 md:p-8'>
        <span className='text-3xl max-w-[450px]'>
          This is the About spanage here.
        </span>
        <br/>
        {/* <p>
          we can spanut thing what to be in header spanlease edit some title for this spanage that can be suitable for us
        </p> */}
      </div>
    </div>
  )
}

export default About