import '../styles/globals.css';
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

import { createTheme, NextUIProvider } from "@nextui-org/react"
import { ThemeProvider as NextThemesProvider } from 'next-themes';

// 2. Call `createTheme` and pass your custom values
const lightTheme = createTheme({
  type: 'light',
  /* theme: {
    colors: {...}, // optional
  } */
})

const darkTheme = createTheme({
  type: 'dark',
  /* theme: {
    colors: {...}, // optional
  } */
})

function MyApp({ Component, pageProps }) {
  
  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className
      }}
    >
      <NextUIProvider theme={darkTheme}>
        <Component {...pageProps} />
      </NextUIProvider>
    </NextThemesProvider>
  )
}

export default MyApp
