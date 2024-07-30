import React from "react";
import { TypewriterEffectSmooth } from "../ui/typewriterEffect";

function MainHeader() {
    const words1 = [
        {
        text: "Hello.",
        className: "text-[#e9f0ff]",
        },
        {
        text: "I'm Arpit",
        className: "text-[#e9f0ff]",
        },
        
    ];
    const words2 = [
        {
        text: "Less",
        className: "text-[#adc3ef] dark:text-[#adc3ef]",
        },
        {
        text: "copying,",
        className: "text-[#adc3ef] dark:text-[#adc3ef]",
        },
        {
        text: "more",
        className: "text-[#adc3ef] dark:text-[#adc3ef]",
        },
        {
        text: "caffeine.",
        className: "text-[#adc3ef] dark:text-[#adc3ef]",
        },
    ];
    return (
        <div className="flex flex-col items-center justify-center h-[20rem]  ">
            <TypewriterEffectSmooth words={words1} />
            <TypewriterEffectSmooth words={words2}  />
            <p className="text-center mt-8 text-lg tracking-wide px-4">
                My passion? Learning and creating content that simplifies the
                complex and helps others thrive.
            </p>
        </div>
    );
}

export default MainHeader;
