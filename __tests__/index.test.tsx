import { expect, test } from "vitest";
import { render, screen } from "@/utils/test-utils";
import Home from "@/pages/index";

test("home", () => {
	render(<Home />);

	expect(
		screen.getByRole("heading", { level: 1, name: "Supabase + Next.js" }),
	).toBeDefined();
});
