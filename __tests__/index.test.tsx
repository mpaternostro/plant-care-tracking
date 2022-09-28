import { expect, test } from "vitest";
import { render, screen } from "@/utils/test-utils";
import Home from "@/pages/index";

const user = {
	id: "08186a5d-f31f-4854-8f82-94d7a990a193",
	aud: "authenticated",
	role: "authenticated",
	email: "test@test.com",
	email_confirmed_at: "2022-09-27 23:33:09.155+00",
	phone: "",
	confirmed_at: "2022-09-27 23:33:09.155+00",
	last_sign_in_at: "2022-09-27 23:33:09.155+00",
	app_metadata: {
		provider: "email",
		providers: ["email"],
	},
	user_metadata: {},
	identities: [],
	created_at: "2022-09-27 23:33:09.155+00",
	updated_at: "2022-09-27 23:33:09.155+00",
	"supabase-auth-helpers-note":
		"This user payload is retrieved from the cached JWT and might be stale. If you need up to date user data, please call the `getUser` method in a server-side context!",
	exp: 1664387205,
	sub: "08186a5d-f31f-4854-8f82-94d7a990a193",
	session_id: "c6356722-2c90-4c5b-b25f-ba642ae27d54",
};

test("home", () => {
	render(<Home user={user} />);

	expect(
		screen.getByRole("heading", { level: 1, name: "Hello test@test.com" }),
	).toBeDefined();
});
