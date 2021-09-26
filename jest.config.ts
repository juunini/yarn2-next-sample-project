export default {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    'jest-plugin-context/setup',
    './jest.setup.ts',
  ],
  moduleNameMapper: {
    '\\.(scss|sass|css)$': 'identity-obj-proxy',
    '^package.json': '<rootDir>/package.json',
    '^pages/(.*)': '<rootDir>/pages/$1',
  },
  testMatch: ['<rootDir>/__tests__/**/?(*.)+(spec|test).[jt]s?(x)'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  modulePaths: ['./'],
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
  ],
  coveragePathIgnorePatterns: [
    '/.next/',
    '/__tests__/',
    '.d.ts',
  ],
};
