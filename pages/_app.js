import '@/styles/globals.css'


//INTERNAL IMPORTS
import {PROVIDER} from "../context/context";
import toast , {Toaster} from "react-hot-toast";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
