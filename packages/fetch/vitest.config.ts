import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        coverage: {
            reporter:  ['text'],
            include:[
                "src/**",
            ],
            exclude: [
                "**/lib/**",
                "**/tests/**",
                "**/*.stories.tsx",
                "**/__fixtures__/**",
            ],
        },
    },
});
