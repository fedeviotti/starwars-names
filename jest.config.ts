import type {Config} from 'jest';

const config: Config = {
  testEnvironment: 'jest-environment-node',
  transform: {
    "^.+\\.(t|j)sx?$": [
      "@swc/jest", {
        jsc: {
          parser: {
            syntax: "typescript",
          },
        },
      },
    ],
  },
};

export default config;
