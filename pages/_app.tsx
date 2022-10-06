import "../styles/globals.css";
import type { AppProps } from "next/app";
import { UserProvider } from "@supabase/auth-helpers-react";
import { supabaseClient } from "@supabase/auth-helpers-nextjs";
import Protected from "../components/protected";
import { store } from "../redux/app/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <UserProvider supabaseClient={supabaseClient}>
        <Protected>
          <Component {...pageProps} />
        </Protected>
        <div
          className="bg-green-600 bg-blue-600 bg-red-600 bg-black"
          hidden
        ></div>
      </UserProvider>
    </Provider>
  );
}

export default MyApp;
