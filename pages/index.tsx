import { GetServerSideProps } from "next";
import { User, withPageAuth } from "@supabase/auth-helpers-nextjs";

interface HomeProps {
	accessToken: string;
	user: User;
}

export default function Home({ user }: HomeProps) {
	return (
		<div className="container" style={{ padding: "50px 0 100px 0" }}>
			<h1>Hello {user.email}</h1>
		</div>
	);
}

export const getServerSideProps: GetServerSideProps = withPageAuth({
	redirectTo: "/login",
});
