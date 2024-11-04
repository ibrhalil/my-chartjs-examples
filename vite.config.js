import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	server: {
		//https: false, // HTTPS'i kapatın
		port: 3000, // İsteğe bağlı olarak portu belirleyin
		open: false,
	},
	plugins: [react()],
});
