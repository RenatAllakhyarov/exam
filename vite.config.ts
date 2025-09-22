import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@api": path.resolve(__dirname, "src/api"),
            "@components": path.resolve(__dirname, "src/components"),
            "@context": path.resolve(__dirname, "src/context"),
            "@domains": path.resolve(__dirname, "src/domains"),
            "@hooks": path.resolve(__dirname, "src/hooks"),
            "@layout": path.resolve(__dirname, "src/layout"),
            "@pages": path.resolve(__dirname, "src/pages"),
            "@routes": path.resolve(__dirname, "src/routes"),
            "@types": path.resolve(__dirname, "src/types"),
        },
    },
});
