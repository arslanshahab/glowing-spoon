import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'
import SimpleReactLightbox from 'simple-react-lightbox'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (!window) {
      return
    }
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    const vh = window.innerHeight * 0.01
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }, [typeof window])
  return (
    <>
      <Toaster
        toastOptions={{
          className: 'bg-black',
          style: {
            backgroundColor: '#000',
            color: '#fff',
          },
        }}
      />
      <SimpleReactLightbox>
        <Component {...pageProps} />
      </SimpleReactLightbox>
    </>
  )
}

export default MyApp
