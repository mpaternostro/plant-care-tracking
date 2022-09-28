import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useUser } from "@supabase/auth-helpers-react";
import { supabaseClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";

const LoginPage = () => {
	const { user, error } = useUser();
	const [data, setData] = useState();

	useEffect(() => {
		async function loadData() {
			const { data } = await supabaseClient.from("test").select("*");
			setData(data);
		}
		// Only run query once user is logged in.
		if (user) loadData();
	}, [user]);

	if (!user)
		return (
			<div className="container" style={{ padding: "50px 0 100px 0" }}>
				{error && <p>{error.message}</p>}
				<h1>Plant Care Tracking</h1>
				<Auth
					supabaseClient={supabaseClient}
					appearance={{ theme: ThemeSupa }}
					theme="dark"
				/>
			</div>
		);

	return (
		<>
			<button onClick={() => supabaseClient.auth.signOut()}>Sign out</button>
			<p>user:</p>
			<pre>{JSON.stringify(user, null, 2)}</pre>
			<p>client-side data fetching with RLS</p>
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</>
	);
};

export default LoginPage;
