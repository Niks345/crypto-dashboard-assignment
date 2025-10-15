module.exports = {
    preset: "jest-puppeteer",
    testEnvironment: "jest-environment-puppeteer",
    testEnvironmentOptions: {
        // Puppeteer launch options here
        headless: true
    },
    testMatch: ["**/__tests__/**/*.test.js?(x)"]
};