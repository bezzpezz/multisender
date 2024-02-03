import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from "next/head";
import { ContextProvider } from "./api/connect";
/* import "./globals.css"; */

function MyApp({ Component, pageProps }: AppProps) {
    return <>
        <Head>
            <title>Multisender</title>
            <meta name="description" content="It supports sending ERC20 tokens and ETH!" />
            <link rel="icon" href="./favicon.ico" />
        </Head>
        <ContextProvider>
            <Component {...pageProps} />
        </ContextProvider>
        <link rel="stylesheet" href="./globals.css"/>
    </>
}

/* eslint-disable @next/next/no-sync-scripts */
/* import '@/styles/globals.css'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
} */

export default MyApp
