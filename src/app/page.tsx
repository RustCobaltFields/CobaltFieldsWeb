"use server"

import "@/module/header/header.module"
import HeaderModule from "@/module/header/header.module";
import "./page.css"
// import DynamicTitle from "./dynamic_title";
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
            {/*<DynamicTitle/>*/}
            <TypeWriter strings={typeWriterStrings} delayAfterDelete={1000} delayAfterPrint={1000} delayBetweenSymbol={100} />
        </div>
    </>
}