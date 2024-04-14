import "@/styles/globals.css";
import { Inter , Quicksand } from "next/font/google";  
import { GoogleOAuthProvider} from '@react-oauth/google'
import { QueryClientProvider,QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });
const quickSand = Quicksand({ subsets: ["latin"] });

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
  <div className={inter.className}>
    <QueryClientProvider client={queryClient}>

    
    <GoogleOAuthProvider clientId="217940922177-4e6t4t8dhd2vv412hgr03a2mamhn0f9a.apps.googleusercontent.com">
    <Component {...pageProps} />;
    <Toaster />
    <ReactQueryDevtools/>
    </GoogleOAuthProvider>
    </QueryClientProvider>
   
   
    </div> );
}
