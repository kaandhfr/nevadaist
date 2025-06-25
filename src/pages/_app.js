import "@/styles/globals.css";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
