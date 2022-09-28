import { loadEnv } from "vite";
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	// load process.env to access in tests
	Object.assign(process.env, loadEnv(mode, process.cwd(), ""));

	return {
		plugins: [react()],
		test: {
			alias: {
				"@": __dirname,
			},
			environment: "jsdom",
			setupFiles: ["./utils/setup.ts"],
		},
	};
});
