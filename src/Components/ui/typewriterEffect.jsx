"use client";

import { cn } from "../../lib/utils";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";

export const TypewriterEffect = ({ words, className, cursorClassName }) => {
  // split text inside of words into array of characters
    const wordsArray = words.map((word) => {
        return {
        ...word,
        text: word.text.split(""),
        };
    });

    const [scope, animate] = useAnimate();
    const isInView = useInView(scope);
    useEffect(() => {
        if (isInView) {
        animate(
            "span",
            {
            display: "inline-block",
            opacity: 1,
            width: "fit-content",
            },
            {
            duration: 0.3,
            delay: stagger(0.1),
            ease: "easeInOut",
            }
        );
        }
    }, [isInView]);

    const renderWords = () => {
        return (
        <motion.div ref={scope} className="inline">
            {wordsArray.map((word, idx) => {
            return (
                <div key={`word-${idx}`} className="inline-block">
                {word.text.map((char, index) => (
                    <motion.span
                    initial={{}}
                    key={`char-${index}`}
                    className={cn(
                        `dark:text-white text-black opacity-0 hidden`,
                        word.className
                    )}
                    >
                    {char}
                    </motion.span>
                ))}
                &nbsp;
                </div>
            );
            })}
        </motion.div>
        );
    };

    return (
        <div
        className={cn(
            "text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center",
            className
        )}
        >
        {renderWords()}
        <motion.span
            initial={{
            opacity: 0,
            }}
            animate={{
            opacity: 1,
            }}
            transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
            }}
            className={cn(
            "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500",
            cursorClassName
            )}
        ></motion.span>
        </div>
    );
    };

    export const TypewriterEffectSmooth = ({
    words,
    className,
    cursorClassName,
    }) => {
    // split text inside of words into array of characters
    const wordsArray = words.map((word) => {
        return {
        ...word,
        text: word.text.split(""),
        };
    });

    const renderWords = () => {
        return (
        <div>
            {wordsArray.map((word, idx) => {
            return (
                <div key={`word-${idx}`} className="inline-block">
                {word.text.map((char, index) => (
                    <span
                    key={`char-${index}`}
                    className={cn(`xl:text-7xl lg:text-6xl md:text-4xl text-2xl font-extrabold text-[#adc3ef]`,word.className)}
                    >
                    {char}
                    </span>
                ))}
                &nbsp;
                </div>
            );
            })}
        </div>
        );
    };

    return (
        <div className={cn("flex space-x-1 md:my-6 justify-center", className)}>
            <motion.div
                className="overflow-hidden pb-2"
                initial={{
                width: "0%",
                }}
                whileInView={{
                width: "fit-content",
                }}
                transition={{
                duration: 2,
                ease: "linear",
                delay: 1,
                }}
            >
                <div
                className="text-xs sm:text-base md:text-xl lg:text:3xl xl:text-5xl font-bold"
                style={{
                    whiteSpace: "nowrap",
                }}
                >
                {renderWords()}
                </div>
            </motion.div>
            <motion.span
                initial={{
                opacity: 0,
                }}
                animate={{
                opacity: 1,
                }}
                transition={{
                duration: 0.8,
                repeat: Infinity,
                repeatType: "reverse",
                }}
                className={cn(
                "block rounded-sm w-[4px] h-8 sm:h-10 md:h-12 lg:h-16 xl:h-20 bg-[#adc3ef]",
                cursorClassName
                )}>
            </motion.span>
        </div>
    );
};
