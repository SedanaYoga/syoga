import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { IconContext } from 'react-icons'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <IconContext.Provider value={{ color: '#3c3c3c' }}>
      <Component {...pageProps} />
    </IconContext.Provider>
  )
}

export default MyApp
