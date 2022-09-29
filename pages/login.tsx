import { useState } from "react";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";

const LoginPage = () => {
	const [supabaseClient] = useState(() => createBrowserSupabaseClient());

	return (
		<div className="container" style={{ padding: "50px 0 100px 0" }}>
			<h1>Plant Care Tracking</h1>
			<Auth
				supabaseClient={supabaseClient}
				appearance={{ theme: ThemeSupa }}
				theme="dark"
			/>
		</div>
	);
};

export default LoginPage;
