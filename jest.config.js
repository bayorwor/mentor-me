module.exports = {
  globalSetup: "<rootDir>/jest-config-files/global-setup.js",
  globalTeardown: "<rootDir>/jest-config-files/global-teardown.js",

  setupFilesAfterEnv: ["<rootDir>/jest-config-files/setup-after-env.js"],
  // testEnvironment: "node",
  coveragePathIgnorePatterns: ["/node_modules/"],
  //   coverageThreshold: {
  //     global: {
  //       branches: 80,
  //       functions: 80,
  //       lines: 80,
  //       statements: -10,
  //     },
  //   },
  displayName: {
    name: "EXPRESS API TEST",
    color: "blue",
  },
};
