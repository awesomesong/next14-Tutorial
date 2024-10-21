import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    // 3. cookies
    // const response = NextResponse.next();

    // const themePreference = request.cookies.get("theme");
    // if(!themePreference) {
    //     response.cookies.set("theme", "dark");
    // }

    // response.headers.set("custom-header","custom-value");

    // return response;
    // 2. rewrite - 경로 변경, url 주소 변경 안됨, 프록시 서버 역할, source 경로 mask
    if (request.nextUrl.pathname === "/profile-route") {
        return NextResponse.rewrite(new URL("/hello-route", request.url))
    }

    // 1. redirect - url 변경
    // return NextResponse.redirect(new URL("/", request.url))
}

// 1. redirect
// export const config = {
//     matcher: "/profile-route",
// }