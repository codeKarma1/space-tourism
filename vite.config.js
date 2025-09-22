import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(), // enables React Fast Refresh + JSX transform
        tailwindcss(), // enables Tailwind in Vite
    ],
});
