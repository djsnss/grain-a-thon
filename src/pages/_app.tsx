// pages/_app.tsx
import { AppProps } from "next/app"; // Import AppProps from next/app
import "../app/globals.css"; // Import your global CSS
import { NextUIProvider } from '@nextui-org/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
