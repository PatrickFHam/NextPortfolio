import '../styles/globals.css'
import { createTheme, NextUIProvider } from '@nextui-org/react';

function MyApp({ Component, pageProps }) {
  
  const darkTheme = createTheme({
    type: 'dark',
    /* theme: {
      colors: {},
    } */
  })
  
  return <NextUIProvider theme={darkTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
}

export default MyApp
