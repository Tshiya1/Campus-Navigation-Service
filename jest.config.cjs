module.exports = {
  transform: {
      '^.+\\.js$': 'babel-jest',
  },
  testEnvironment: 'node',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
};