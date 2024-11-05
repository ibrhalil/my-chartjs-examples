import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import basicSsl from "@vitejs/plugin-basic-ssl";

// https://vite.dev/config/
export default defineConfig({
	server: {
		https: true,
		port: 3000,
		open: false,
	},
	plugins: [react(), basicSsl()],
});
