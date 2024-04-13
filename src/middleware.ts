import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtVerify } from 'jose'
 
export async function middleware(request: NextRequest) {

    const jwt = request.cookies.get('token')

    if (jwt === undefined) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    try {
        await jwtVerify(jwt.value, new TextEncoder().encode(process.env.NEXT_SECRET_JWT_SEED))
        return NextResponse.next()
    } catch (error) {
        console.log(error);
        return NextResponse.redirect(new URL('/login', request.url))
    }
}
 
export const config = {
  matcher: '/cuidados',
}