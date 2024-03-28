import React from 'react'

function Projects() {
  const card = (
    <div className='h-48 w-80 rounded-sm bg-white/10'>
        <h1 className=''>JavaScript Projects</h1>
      </div>
  )
  return (
    <div className='w-3/5 flex flex-col justify-center mt-12 mb-10'>
      <h1 className='text-4xl mb-8'>Projects</h1>
      <div className='flex flex-wrap gap-4'>
        {card}
        {card}
        {card}
        {card}
      </div>
    </div>
  )
}

export default Projects
