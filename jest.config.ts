export default {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/setup-jest.js'],
  collectCoverageFrom: ['**/src/components/**', '**/src/pages/**', '**/src/router.tsx'],
};
