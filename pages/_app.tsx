import "../styles/globals.css";
import type { AppProps } from "next/app";
import { UserProvider } from "@supabase/auth-helpers-react";
import { supabaseClient } from "@supabase/auth-helpers-nextjs";
import Protected from "../components/protected";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider supabaseClient={supabaseClient}>
      <Protected>
      <Component {...pageProps} />
      <div className="bg-green-600 bg-blue-600 bg-red-600 bg-black" hidden></div>
      </Protected>
    </UserProvider>
  );
}

export default MyApp;
