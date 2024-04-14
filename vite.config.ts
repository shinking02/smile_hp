import react from "@vitejs/plugin-react-swc";
import { ServerOptions, defineConfig, loadEnv } from "vite";
import Sitemap from "vite-plugin-sitemap";
import tsconfigPaths from "vite-tsconfig-paths";

export default ({ mode }) => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
    // import.meta.env.VITE_ENV available here with: process.env.VITE_ENV
    const serverOptions: ServerOptions = {};
    serverOptions.port = parseInt(process.env.VITE_PORT);
    if (mode === "development") {
        serverOptions.proxy = {
            "/api": {
                target: "http://localhost:3000",
                changeOrigin: true,
            },
        };
    }
    return defineConfig({
        plugins: [
            react(),
            tsconfigPaths(),
            Sitemap({
                hostname: process.env.VITE_HOST,
                dynamicRoutes: ["/contact", "/blog_list", "/blog/:date"],
            }),
        ],

        server: serverOptions,
    });
};
