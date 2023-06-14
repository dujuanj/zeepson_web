import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../../components/header";
import Footer from "../../components/footer";
// import SSRProvider from 'react-bootstrap/SSRProvider'
import { Inter } from '@next/font/google'
import 'animate.css';

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  <style jsx global>{`
  html {
    font-family: ${inter.style.fontFamily};
  }
`}</style>
  return (
    <>
        <div >
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  )
  // return <SSRProvider> <Component {...pageProps} /> </SSRProvider>;
}
