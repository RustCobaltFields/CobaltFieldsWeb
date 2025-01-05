"use server"

import {cookies} from "next/headers";

export async function IsLoggedIn() {
    const cookieStore = await cookies();
    const session_id = cookieStore.get('session_token');
    return session_id !== undefined;
}