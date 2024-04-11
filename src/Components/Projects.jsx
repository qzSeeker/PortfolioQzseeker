import React from 'react'

function Projects() {
  const card = (
    <div className='h-48 w-80 rounded-sm bg-white/10 ease-in hover:border border-violet-400 duration-300 transition shadow-[0px_0px_20px_0px_rgba(0,0,0,0.3)] hover:shadow-violet-400'>
        <h1 className='text-center mt-20'>JavaScript Projects</h1>
      </div>
  )
  return (
    <div className='w-full'>
      <div className='mt-12 mb-10 mx-8 xl:mx-56'>
        <h1 className='text-2xl mb-8'>Projects</h1>
        <div className='flex flex-wrap gap-4'>
          {card}
          {card}
          {card}
          {card}
        </div>
      </div>
    </div>
  )
}

export default Projects
