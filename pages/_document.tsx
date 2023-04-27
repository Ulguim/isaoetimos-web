import React from 'react'

import axios from 'axios'
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'
import { parseCookies } from 'nookies'

async function validateToken(ctx, token: string) {
  if (!token) {
    ctx.res?.writeHead(302, { Location: '/auth/login' })
    ctx.res?.end()
    return
  }
  const res = await axios.post(process.env.NEXT_PUBLIC_API_URL, {
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

  return !!res?.data?.data?.isTokenValid?.valid
}

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    const cookies = parseCookies(ctx)
    const token = cookies?.['@easyRp:authToken']

    if (ctx.pathname === '/') {
      const isTokenValid = await validateToken(ctx, token)
      if (isTokenValid) {
        ctx.res?.writeHead(302, { Location: '/admin/finances' })
        ctx.res?.end()
        return
      } else {
        ctx.res?.writeHead(302, { Location: '/auth/login' })
        ctx.res?.end()
        return
      }
    }

    if (ctx.pathname.includes('admin')) {
      const isTokenValid = await validateToken(ctx, token)

      if (!isTokenValid) {
        ctx.res?.writeHead(302, { Location: '/auth/login' })
        ctx.res?.end()
        return
      }
    }
    return initialProps
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            httpEquiv="Content-Type"
            content="text/html; charset=utf-8"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {/* eslint-disable-next-line @next/next/no-title-in-document-head */}
          <title>Eazy Rp</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
