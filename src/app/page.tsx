"use server"

import "@/module/header/header.module"
import HeaderModule from "@/module/header/header.module";
import "./page.css"
import TypeWriter from "@/module/type_writer/type_writer.module";

const typeWriterStrings = [
    "высокий онлайн",
    "полная ванила",
    "низкий пинг",
    "активная администрация",
    "доступны скины на постройки",
    "вайпы раз в две недели"
]

export default async function Page() {
    return <>
        <HeaderModule />
        <div className={"pageContainer centerChild"}>
            <div className={"serverTitle"}>
                Cobalt Fields
            </div>
            <div className="titleContainer">
                <span className="titleStaticPart">На нашем сервере </span>
                <TypeWriter
                    strings={typeWriterStrings}
                    delayAfterDelete={500}
                    delayAfterPrint={500}
                    delayBetweenSymbol={60}
                    wrapperClassName={"titleDynamicPart"}
                />
            </div>
        </div>
    </>
}