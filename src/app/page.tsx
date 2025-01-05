"use client"

import "@/module/header/header.module"
import HeaderModule from "@/module/header/header.module";
import "./page.css"
import {useEffect, useState} from "react";

const dynamicPartTexts = [
    "высокий онлайн",
    "низкий пинг",
    "полная ванила"
]

function DynamicTitle() {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    useEffect(() => {
        const showNextText = () => {
            let hasNext = currentTextIndex < dynamicPartTexts.length - 1;
            if (hasNext) {
                setCurrentTextIndex(currentTextIndex + 1);
            } else {
                setCurrentTextIndex(0);
            }
        }
        const intervalId = setInterval(showNextText, 2000);

        return () => {
            clearInterval(intervalId);
        };
    }, [currentTextIndex]);
    return <div className={"titleContainer"}>
        <span className={"titleStaticPart"}>На нашем сервере</span>
        <span className={"titleDynamicPart"}> {dynamicPartTexts[currentTextIndex]}</span>
    </div>;
}

export default function Page() {
    return <>
        <HeaderModule/>
        <div className={"pageContainer"}>
            <DynamicTitle/>
        </div>
    </>
}