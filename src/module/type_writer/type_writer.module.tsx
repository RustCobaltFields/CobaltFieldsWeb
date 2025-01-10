"use client"

import {useEffect, useState} from "react";
import "./type_writer_module.css";

interface DynamicTypingTextProps {
    strings: Array<string>,
    isCursor?: boolean,
    delayAfterDelete: number,
    delayAfterPrint: number,
    delayBetweenSymbol: number,
    debug?: boolean,
    wrapperClassName?: string,
    cursorClassName?: string
}

export default function TypeWriter(
    {
        strings,
        isCursor = true,
        delayAfterDelete,
        delayAfterPrint,
        delayBetweenSymbol,
        debug = false,
        wrapperClassName = "type_writer_wrapper",
        cursorClassName = "cursor"
    }: DynamicTypingTextProps
) {
    const [displayedText, setDisplayedText] = useState("")
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [delay, setDelay] = useState(0);
    const update = () => {
        if (isPaused) return;
        if (delay > 0) {
            // setDelay((prevState) => {return prevState-1});
            return;
        }
        if (debug) console.debug(`calling update. isDeleting: ${isDeleting}; displayedText: ${displayedText}; currentText: ${strings[currentTextIndex]}`);
        if (isDeleting) {
            if (debug) console.debug(`deleting. slice: ${displayedText.slice(0, displayedText.length - 1)}`);
            setDisplayedText((prevState: string) => {
                return prevState.slice(0, prevState.length - 1)
            })
            if (displayedText === "") {
                setIsDeleting(false);
                setCurrentTextIndex((prevState: number) => {
                    if (prevState + 1 < strings.length) {
                        return prevState + 1;
                    } else {
                        return 0;
                    }
                })
                // setTimeout(update, delayAfterDelete);
                setDelay(delayAfterDelete);
                return;
            }
        } else {
            if (debug) console.debug(`printing. currentTextIndex: ${strings[currentTextIndex][displayedText.length]}`)
            setDisplayedText((prevState: string) => {
                return prevState + strings[currentTextIndex][prevState.length]
            })
            if (displayedText === strings[currentTextIndex].slice(0, strings[currentTextIndex].length - 1)) {
                setIsDeleting(true);
                // setTimeout(update, delayAfterPrint);
                setDelay(delayAfterPrint);
                return;
            }
        }
        // setTimeout(update, delayBetweenSymbol);
        setDelay(delayBetweenSymbol);
    }
    useEffect(() => {
        update();
        const updateTimeout = setTimeout(() => {
            setDelay((prevState) => {return prevState - 1})
        }, 1)
        return () => {
            clearTimeout(updateTimeout);
        }
    }, [delay]);
    return <span className={wrapperClassName}>
        {displayedText}
        {isCursor ? <span className={cursorClassName}>|</span> : <></>}
    </span>
}