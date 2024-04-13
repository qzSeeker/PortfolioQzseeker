
import { Link } from 'react-router-dom'
import React from 'react'

function Card({title, name, date, duration, link, img, ...otherProps}) {
    return (
        <div className="h-[max] cursor-pointer w-full p-4 rounded-md bg-white/10 ease-in hover:border border-white/15 duration-300 transition shadow-md hover:shadow-violet-400 overflow-hidden">
            <h1 className="">{title}</h1>
            <p className='mt-2 text-sm'>
                {date} • {duration}
            </p>
                <Link to={link} target="_blank" rel="noopener noreferrer" {...otherProps} className="text-blue-500 hover:underline">
                    {link.includes('http') ? <img className='h-5 mt-5' src={img}/> : link}
                </Link>
        </div>
    )
}

export default Card
