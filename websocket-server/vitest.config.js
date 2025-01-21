"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("vitest/config");
exports.default = (0, config_1.defineConfig)({
    test: {
        globals: true,
        environment: "node",
        include: ["src/**/*.test.ts"],
        coverage: {
            provider: "v8",
            reporter: ["text", "html"],
            exclude: ["**/*.test.ts"],
        },
        setupFiles: ['./src/test/setup.ts'],
        mockReset: true,
        deps: {
            external: ['vscode'],
            interopDefault: true,
        },
    },
});
//# sourceMappingURL=vitest.config.js.map