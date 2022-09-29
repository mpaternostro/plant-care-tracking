import { useState } from "react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import {
	createBrowserSupabaseClient,
	User,
	withPageAuth,
} from "@supabase/auth-helpers-nextjs";

interface HomeProps {
	initialSession: {
		user: User;
	};
}

export default function Home({ initialSession: { user } }: HomeProps) {
	const router = useRouter();
	const [supabaseClient] = useState(() => createBrowserSupabaseClient());

	return (
		<div className="container" style={{ padding: "50px 0 100px 0" }}>
			<button
				onClick={async () => {
					try {
						await supabaseClient.auth.signOut();
						await router.push("/");
					} catch (error) {
						console.error(`Could not logout: ${error as string}`);
					}
				}}
			>
				Logout
			</button>
			<h1>Hello {user.email}</h1>
		</div>
	);
}

export const getServerSideProps: GetServerSideProps = withPageAuth({
	redirectTo: "/login",
});
