"use client"

//TODO: вынести стили dynamic_title в отдельный файл
//TODO: (возможно) сделать полноценный модуль dynamic_title с параметрами

import {useEffect, useState} from "react";

const dynamicPartTexts = [
    "высокий онлайн",
    "полная ванила",
    "низкий пинг",
    "активная администрация",
    "доступны скины на постройки",
    "вайпы раз в две недели"
]

export default function DynamicTitle() {

    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [isPaused, setIsPaused] = useState(false); // Состояние для паузы

    useEffect(() => {
        const fullText = dynamicPartTexts[currentTextIndex];

        const interval = setInterval(() => {
            if (isPaused) return; // Если есть пауза, не выполняем никаких действий

            if (isDeleting) {
                // Удаляем текст символ за символом
                setDisplayText((prev) => prev.slice(0, -1));
                if (displayText.length === 0) {
                    // Когда текст полностью стерся, начинаем паузу
                    setIsPaused(true);
                    setTimeout(() => {
                        setIsDeleting(false);
                        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % dynamicPartTexts.length);
                        setIsPaused(false);
                    }, 1000); // Задержка в 1 секунду перед сменой текста
                }
            } else {
                // Добавляем текст символ за символом
                setDisplayText((prev) => fullText.slice(0, prev.length + 1));
                if (displayText === fullText) {
                    // Когда текст полностью написан, ждём перед удалением
                    setTimeout(() => setIsDeleting(true), 1000); // Пауза 1 секунда перед удалением
                }
            }
        }, 100);

        return () => clearInterval(interval);
    }, [displayText, isDeleting, currentTextIndex, isPaused]);

    return (
        <div className="titleContainer">
            <span className="titleStaticPart">На нашем сервере</span>
            <span className="titleDynamicPart">
                {` ${displayText}`}
                <span className="cursor">|</span>
            </span>
        </div>
    );
}