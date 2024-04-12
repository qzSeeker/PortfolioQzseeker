import React from "react";

function Cards({title, description}) {
    return (
        <div className="h-56 w-full rounded-md bg-white/10 ease-in hover:border border-white/15 duration-300 transition shadow-md hover:shadow-violet-400">
            <h1 className="text-center mt-20">{title}</h1>
            <p className="text-center mt-25">{description}</p>
        </div>
    );
}

export default Cards;
