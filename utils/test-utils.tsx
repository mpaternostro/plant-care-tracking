import { render, RenderOptions } from "@testing-library/react";
import { UserProvider } from "@supabase/auth-helpers-react";
import { supabaseClient } from "@supabase/auth-helpers-nextjs";

const customRender = (
	ui: React.ReactElement,
	options?: Omit<RenderOptions, "wrapper">,
) =>
	render(ui, {
		// wrap provider(s) here if needed
		wrapper: ({ children }) => (
			<UserProvider supabaseClient={supabaseClient}>{children}</UserProvider>
		),
		...options,
	});

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
// override render export
export { customRender as render };
