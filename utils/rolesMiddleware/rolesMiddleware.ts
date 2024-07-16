import { cookies, headers } from "next/headers"
import { NextRequest, NextResponse } from "next/server"


export function middleware(request: NextRequest) {
  
  // cookies().get('token')
  headers()
  
  const isMainPage = !request.url.includes('arbitr')
  if (isMainPage) return NextResponse.next()


    return NextResponse.redirect(new URL('/home', request.url))
}