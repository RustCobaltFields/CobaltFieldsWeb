"use server"

import "./header_module.css";
import { IsLoggedIn } from "@/helper/auth.helper";

function LogoSection() {
    return <div className={"logoSection"}>
        Logo placeholder
    </div>
}

async function AuthSection() {
    let is_logged_in = await IsLoggedIn();
    // const prom = IsLoggedIn();
    // prom.then((res) => {
    //     is_logged_in = res
    // })
    return <div className={"authSection"}>
        {is_logged_in ?
            <>

            </>
            : <a href={`/login`} className={"loginButton"}>
                <span>Войти</span>
            </a>
        }
    </div>
}

function NavigationLink(text: string, link: string) {
    return <a href={link} className={"navigationLink"}>
        {text}
    </a>
}

function NavigationSection() {
    return <div className={"centralSection"}>
        {NavigationLink("Сервера", "/servers")}
        {NavigationLink("Магазин", "/shop")}
        {NavigationLink("Поддержка", "/support")}
    </div>
}


export default async function HeaderModule() {
    return <header className={"headerContainer"}>
        <LogoSection/>
        <NavigationSection/>
        <AuthSection/>
    </header>
}
