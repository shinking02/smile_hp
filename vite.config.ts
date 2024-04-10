import react from "@vitejs/plugin-react-swc";
import { defineConfig, loadEnv } from "vite";
import Sitemap from "vite-plugin-sitemap";
import tsconfigPaths from "vite-tsconfig-paths";

export default ({ mode }) => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

    // import.meta.env.VITE_ENV available here with: process.env.VITE_ENV

    return defineConfig({
        plugins: [
            react(),
            tsconfigPaths(),
            Sitemap({
                hostname: process.env.VITE_HOST,
                dynamicRoutes: ["/contact", "/blogs"],
            }),
        ],

        server: {
            port: parseInt(process.env.VITE_PORT),
        },
    });
};
