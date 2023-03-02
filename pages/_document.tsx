import { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        /> */}
        {/* <title>Aqua Water Purifier</title> */}
        <link
          rel="shortcut icon"
          href="images/fav.png"
          type="image/x-icon"
        />
        <link rel="shortcut icon" href="images/fav.jpg" />
        <link rel="stylesheet" href="css/bootstrap.min.css" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
        />
        <link
          rel="stylesheet"
          href="plugins/testimonial/css/owl.carousel.min.css"
        />
        <link
          rel="stylesheet"
          href="plugins/testimonial/css/owl.theme.min.css"
        />
        <link rel="stylesheet" type="text/css" href="css/style.css" />
        <link rel="stylesheet" href="css/animate.min.css" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"
        />
        {/* <p>Enter your HTML here</p> */}
      </Head>
      <body>
        <Main />
        <NextScript />

        <Script src="js/jquery-3.2.1.min.js"></Script>
        <Script src="js/popper.min.js"></Script>
        <Script src="js/bootstrap.bundle.min.js"></Script>
        <Script src="plugins/scroll-fixed/jquery-scrolltofixed-min.js"></Script>
        <Script src="plugins/testimonial/js/owl.carousel.min.js"></Script>
        <Script src="js/script.js"></Script>
      </body>
    </Html>
  );
}
