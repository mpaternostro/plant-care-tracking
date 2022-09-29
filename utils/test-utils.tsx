import { render, RenderOptions } from "@testing-library/react";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";

const customRender = (
	ui: React.ReactElement,
	options?: Omit<RenderOptions, "wrapper">,
) => {
	const supabaseClient = createBrowserSupabaseClient();

	return render(ui, {
		// wrap provider(s) here if needed
		wrapper: ({ children }) => (
			<SessionContextProvider supabaseClient={supabaseClient}>
				{children}
			</SessionContextProvider>
		),
		...options,
	});
};

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
// override render export
export { customRender as render };
