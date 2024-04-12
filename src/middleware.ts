import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL('/home', request.url))

    const jwt = request.cookies.get('token')

    if (request.nextUrl.pathname.includes('/cuidados')) {
        if (jwt === undefined) {
            // return NextResponse.redirect(new URL('/login', request.url))
        }
    }
    if (request.nextUrl.pathname.includes('/login')) {
        if (jwt !== undefined) {
            // return NextResponse.redirect(new URL('/', request.url))
        }
    }

    return NextResponse.next()
}
 
// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/about/:path*',
// }