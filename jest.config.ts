module.exports = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  testMatch: ["**/**/*.test.(ts|tsx|js|jsx)"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/**/*.test.{ts,tsx}",
    "!src/index.tsx", // Exclude the entry point file if it's not covered by tests
  ],
  coverageDirectory: "coverage",
  coverageReporters: ["lcov", "text-summary"],
};
