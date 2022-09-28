import { User, withPageAuth } from "@supabase/auth-helpers-nextjs";

interface ProfileProps {
	user: User;
}

export default function Profile({ user }: ProfileProps) {
	return (
		<>
			<div>Hello {user.email}</div>
			<pre>{JSON.stringify(user, null, 2)}</pre>
		</>
	);
}

export const getServerSideProps = withPageAuth();
