import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'
import SimpleReactLightbox from 'simple-react-lightbox'

function MyApp({ Component, pageProps }: AppProps) {
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
