/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/playwright/", "/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/test/setup-after-env.ts"],
  moduleNameMapper: {
    // Force module uuid to resolve with the CJS entry point, because Jest does not support package.json.exports. See https://github.com/uuidjs/uuid/issues/451
    "@remix-run/web-fetch": require.resolve("@remix-run/web-fetch"),
    "@remix-run/web-blob": require.resolve("@remix-run/web-blob"),
    "@remix-run/web-stream": require.resolve("@remix-run/web-stream"),
    "@remix-run/web-form-data": require.resolve("@remix-run/web-form-data"),
    "@remix-run/web-file": require.resolve("@remix-run/web-file"),
    "@web3-storage/multipart-parser": require.resolve(
      "@web3-storage/multipart-parser"
    ),
  },
};
