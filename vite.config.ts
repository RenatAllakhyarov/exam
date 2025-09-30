import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@api": path.resolve(__dirname, "src/api"),
            "@components": path.resolve(__dirname, "src/components"),
            "@contexts": path.resolve(__dirname, "src/contexts"),
            "@domains": path.resolve(__dirname, "src/domains"),
            "@hooks": path.resolve(__dirname, "src/hooks"),
            "@Layouts": path.resolve(__dirname, "src/Layouts"),
            "@pages": path.resolve(__dirname, "src/pages"),
            "@routes": path.resolve(__dirname, "src/routes"),
            "@appTypes": path.resolve(__dirname, "src/appTypes"),
            "@utils": path.resolve(__dirname, "src/utils"),
        },
    },
});
