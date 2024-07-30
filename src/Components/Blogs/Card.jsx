
import { Link } from 'react-router-dom'
import React, { useRef } from 'react'
import { useInView, motion } from 'framer-motion';

function Card({title, name, date, duration, link, img, ...otherProps}) {
    const ref = useRef(null);
    const isInView = useInView(ref, {once : true});

    return (
        <motion.div ref={ref} className="h-[max] cursor-pointer w-full p-4 rounded-md bg-white/10 ease-in hover:border border-white/15 duration-300 transition-all shadow-md hover:shadow-white/20 overflow-hidden"
        initial={{ opacity: 0, scale: 0.6 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{
                duration: 0.3,
                delay: 0.3,
                easeIn: [0.25, 1, 0.25, 1]
            }}
            >
            <h1 className="">{title}</h1>
            <p className='mt-2 text-sm'>
                {date} • {duration}
            </p>
                <Link to={link} target="_blank" rel="noopener noreferrer" {...otherProps} className="text-blue-500 hover:underline">
                    {link.includes('http') ? <img className='h-5 mt-5' src={img}/> : link}
                </Link>
        </motion.div>
    )
}

export default Card
