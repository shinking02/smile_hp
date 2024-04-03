import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import Sitemap from "vite-plugin-sitemap";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    plugins: [react(), tsconfigPaths(), Sitemap()],
});
