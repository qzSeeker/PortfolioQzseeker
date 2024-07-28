import React from "react";

export default function Twitter() {
    return (
        <div className="w-full">
        <div className="mt-12 mb-10 mx-8 xl:mx-40">
            <h1 className="text-2xl mb-8">Twitter Page</h1>
            <div className="h-max flex flex-col justify-around items-top p-6 w-full rounded-md bg-white/10 ease-in hover:border border-white/15 transition-all shadow-md hover:shadow-violet-400 overflow-hidden">
                <p>Learn in public</p>
                <div className="grid md:grid-cols-2 gap-10 md:gap-0 items-center">
                    <div className="h-full w-full flex justify-center items-center">
                        <img className="h-64 rounded-md" src="public\Screenshot_2024-07-13-11-04-29-29_0b2fce7a16bf2b728d6ffa28c8d60efb.jpg"></img>
                    </div>
                    <div className="h-full w-full flex justify-center items-center">
                        <img className="h-64 rounded-md" src="public\Screenshot_2024-07-13-11-07-43-31_0b2fce7a16bf2b728d6ffa28c8d60efb.jpg"></img>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}
