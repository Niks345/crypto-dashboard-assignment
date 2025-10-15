module.exports = {
    launch: {
        headless: true,
        slowMo: 20,
    },
    server: {
        command: "npx http-server . -p 8080",
        port: 8080,
        launchTimeout: 10000,
    },
};
