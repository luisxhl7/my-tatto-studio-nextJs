import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtVerify } from 'jose'
 
export async function middleware(req: NextRequest) {

    const jwt = await req.cookies.get('token')
    console.log(req);
    
    if (jwt === undefined) {
        const requestedPage = req.nextUrl.pathname
        const url = req.nextUrl.clone()
        url.pathname = '/login'
        url.search = `p=${requestedPage}`
        
        return NextResponse.redirect( url )
    }
    try {
        const state = await jwtVerify(jwt.value, new TextEncoder().encode(process.env.JWT_SECRET_SEED))

        return NextResponse.next()
    } catch (error) {
        console.log(error);
        return NextResponse.redirect(new URL('/login', req.url))
    }
}
 
export const config = {
    matcher: '/agenda/:path*',
}