import "../styles/globals.css";
import type { AppProps } from "next/app";
import { UserProvider } from "@supabase/auth-helpers-react";
import { supabaseClient } from "@supabase/auth-helpers-nextjs";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider supabaseClient={supabaseClient}>
      <Component {...pageProps} />
      <div className="bg-green-600 bg-blue-600 bg-red-600 bg-black" hidden></div>
    </UserProvider>
  );
}

export default MyApp;
