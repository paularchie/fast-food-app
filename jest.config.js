module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  "transform": {
    "^.+\\.(ts|tsx)$": "babel-jest"
  },
  "moduleNameMapper": {
    "\\.(css|scss)$": "<rootDir>/styleMock.js"
  },
  collectCoverage: true,
  "collectCoverageFrom": [
    "src/OrdersPage/**/*.{ts,tsx}",
    "src/Schedule/**/*.{ts,tsx}"
  ]
}