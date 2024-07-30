import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";

function Cards({
    title,
    description,
    link,
    img,
    tech,
    webImg,
    webLink,
    ...otherProps
    }) {
        const ref1 = useRef(null);
        const isInView1 = useInView(ref1, {once : true});
    return (
        <motion.div ref={ref1} className="h-max flex flex-col justify-around items-top p-6 w-full rounded-md bg-white/10 ease-in hover:border border-white/15 transition-all shadow-md hover:shadow-white/20 overflow-hidden"
        initial={{ opacity: 0, scale: 0.6 }}
            animate={isInView1 ? { opacity: 1, scale: 1 } : {}}
            transition={{
                duration: 0.3,
                delay: 0.3,
                easeIn: [0.25, 1, 0.25, 1]
            }}
            >
            <div className="flex justify-between items-center mb-4"
            
            >
                <div className="flex flex-col gap-4 w-full">
                    <h1 className="">{title}</h1>
                    <h1 className="text-sm">{description}</h1>
                </div>
                <div className="flex gap-4 w-max">
                <Link
                    to={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    {...otherProps}
                >
                    {link ? <img className="h-5" src={img} /> : link}
                </Link>
                <Link
                    to={webLink}
                    target="_blank"
                    rel="noopener noreferrar"
                    {...otherProps}
                    className=""
                >
                    {webLink ? <img className="h-5" src={webImg} /> : webLink}
                </Link>
                </div>
            </div>
        <button className="">{tech}</button>
        </motion.div>
    );
}

export default Cards;
