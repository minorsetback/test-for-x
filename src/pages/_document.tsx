import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  /* eslint-disable @next/next/google-font-display */
  
  return (
    <Html lang="en">
      <Head />
      <link
        href="https://fonts.googleapis.com/css?family=Manrope&display=block"
        rel="stylesheet"
        as="style"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Mulish&display=block"
        rel="stylesheet"
        as="style"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Poppins&display=block"
        rel="stylesheet"
        as="style"
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
