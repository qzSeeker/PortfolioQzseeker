import React from "react";
import { Link } from "react-router-dom";

function Cards({ title, description, link, img, tech, webImg, webLink, ...otherProps }) {
    return (
        <div className="h-max flex justify-evenly items-top p-6 w-full rounded-md bg-white/10 ease-in hover:border border-white/15 duration-300 transition shadow-md hover:shadow-violet-400 overflow-hidden">
        <div className="">
            <h1 className="">{title}</h1>
            <p className="mt-5">{description}</p>
            <button className="">{tech}</button>
        </div>
        <div className="flex gap-4">
            <Link
                to={link}
                target="_blank"
                rel="noopener noreferrer"
                {...otherProps}
            >
                {link ? <img className="h-5 mt-5" src={img} /> : link}
            </Link>
            <Link 
            to={webLink}
            target="_blank"
            rel="noopener noreferrar"
            {...otherProps}
            className="">
            {webLink ? <img className='h-5 mt-5' src={webImg}/> : webLink}
            </Link>
        </div>
        </div>
    );
}

export default Cards;
