import { config as envConfig } from '@app/config/env'
import fetchAdapter from '@vespaiach/axios-fetch-adapter'
import axios from 'axios'
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {
  const token = req.cookies.get('@easyRp:authToken')

  if (!token && req.nextUrl.pathname != '/auth/login') {
    console.log(`\nValidate Token with undefined token: ${token}\n`)
    return NextResponse.redirect(new URL('/auth/login', req.url))
  }

  const axiosIsnt = axios.create({
    adapter: fetchAdapter,
  })
  const res = await axiosIsnt.post(envConfig.API_URL, {
    operationName: 'isTokenValid',
    query: `query isTokenValid($token: String!){
      isTokenValid(token: $token) {
        valid
      }
    }`,
    variables: {
      token,
    },
  })

  const isValidUser = !!res?.data?.data?.isTokenValid?.valid
  console.log(
    '🚀 ~ file: middleware.ts:28 ~ middleware ~ isValidUser:',
    res?.data?.data?.isTokenValid?.valid,
  )

  if (req.nextUrl.pathname.startsWith('/admin')) {
    if (!isValidUser) {
      console.log('Invalid user redirecting to login area')
      return NextResponse.rewrite(new URL('/auth/login', req.url))
    }
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/admin/:path*', '/'],
}
