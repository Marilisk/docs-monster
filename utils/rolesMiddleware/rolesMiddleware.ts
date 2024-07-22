import { headers } from "next/headers"
import { NextRequest, NextResponse } from "next/server"


export function middleware(request: NextRequest) {

    headers()

    const isMainPage = !request.url.includes('arbitr')
    if (isMainPage) return NextResponse.next()


    return NextResponse.redirect(new URL('/home', request.url))
}