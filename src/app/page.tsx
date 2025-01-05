"use server"

import "@/module/header/header.module"
import HeaderModule from "@/module/header/header.module";
import "./page.css"
import DynamicTitle from "./dynamic_title";


export default async function Page() {
    return <>
        <HeaderModule />
        <div className={"pageContainer"}>
            <div className={"serverTitle"}>
                Cobalt Fields
            </div>
            <DynamicTitle/>
        </div>
    </>
}