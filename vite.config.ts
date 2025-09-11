// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@assets": path.resolve(__dirname, "./src/assets"),
            "@components": path.resolve(__dirname, "./src/components"),
            "@pages": path.resolve(__dirname, "./src/pages"),
            "@app-types": path.resolve(__dirname, "./src/types"),
            "@router": path.resolve(__dirname, "./src/router"),
            "@domains": path.resolve(__dirname, "./src/domains"),
            "@utils": path.resolve(__dirname, "./src/utils"),
            "@hooks": path.resolve(__dirname, "./src/hooks"),
            "@contexts": path.resolve(__dirname, "./src/contexts"),
            "@services": path.resolve(__dirname, "./src/services"),
            "@layout": path.resolve(__dirname, "./src/layout"),
        },
    },
});