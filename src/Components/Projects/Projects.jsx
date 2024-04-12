import React from 'react'
import Cards from './Cards'

function Projects() {
  const cards = [
    { title: 'JavaScript Projects', description: 'Project description'},
    { title: 'React Projects', description: 'Project description'},
    { title: 'Tailwind Projects', description: 'Project description'},
    { title: 'QzSeeker', description: 'Project description'},
  ]
  return (
    <div className='w-full'>
      <div className='mt-12 mb-10 mx-8 xl:mx-40'>
        <h1 className='text-2xl mb-8'>Projects</h1>
        <div className='grid grid-cols-1 xl:grid-cols-2 gap-4'>
          {cards.map((card) => (
            <Cards key={card.title} {...card} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
