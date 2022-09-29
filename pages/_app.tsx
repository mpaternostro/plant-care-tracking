import "@/styles/globals.css";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
	const supabaseClient = createBrowserSupabaseClient();

	return (
		<SessionContextProvider supabaseClient={supabaseClient}>
			<Component {...pageProps} />
		</SessionContextProvider>
	);
}
export default MyApp;
