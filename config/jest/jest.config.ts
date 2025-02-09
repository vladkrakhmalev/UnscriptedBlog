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
  moduleNameMapper: {
    '\\.s?css$': 'identity-obj-proxy',
  },
  rootDir: '../../',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.svg$': 'jest-transformer-svg',
  },
  setupFilesAfterEnv: ['<rootDir>/config/jest/setupTests.ts'],
};
