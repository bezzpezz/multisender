/* eslint-disable @next/next/no-sync-scripts */
import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
    return (
        <>
            <Html lang="en">
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500&family=Roboto:wght@500;700&display=swap"
                        rel="stylesheet"
                    />
                    {/* Google Web Fonts */}
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

                    {/* Icon Font Stylesheet  */}
                    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />

                    {/* WOW */}
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css" />

                    <link
                        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
                        rel="stylesheet"
                        integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
                        crossOrigin="anonymous">
                    </link>
                    
                    <script
                        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
                        integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
                        crossOrigin="anonymous">
                    </script>

                    {/* JavaScript Libraries */}
                    {/* <Script src="https://code.jquery.com/jquery-3.4.1.min.js" /> */}
                    <Script src="/node_modules/bootstrap/dist/js/bootstrap.min.js" />
                    <Script src="countup.js/dist/countUp.min.js" />

                    {/* <Script src="./lib/wow/wow.min.js" />
                    <Script src="./lib/easing/easing.min.js" />
                    <Script src="./lib/waypoints/waypoints.min.js" />
                    <Script src="./lib/counterup/counterup.min.js" />  */}
                    {/* <Script src="./lib/owlcarousel/owl.carousel.min.js" /> */}


                    {/* Template Javascript */}
                    {/* <Script src="./js/main.js" /> */}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        </>
    )
}