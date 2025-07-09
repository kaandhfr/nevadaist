import "@/styles/globals.css";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Toaster position="top-right" />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
