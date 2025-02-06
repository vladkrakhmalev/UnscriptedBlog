export default {
  clearMocks: true,
  testEnvironment: "jsdom",
  coveragePathIgnorePatterns: [
    "/node_modules/"
  ],
  moduleDirectories: [
    "node_modules"
  ],
  moduleFileExtensions: [
    "js",
    "jsx",
    "ts",
    "tsx",
    "json",
    "node"
  ],
  rootDir: '../../',
  transform: {
    '^.+\\.ts?$': 'ts-jest', // '^.+\\.(js|jsx|ts|tsx|mjs)$'
  },
};
