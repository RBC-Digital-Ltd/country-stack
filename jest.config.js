/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/playwright/", "/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/test/setup-after-env.ts"],
};
