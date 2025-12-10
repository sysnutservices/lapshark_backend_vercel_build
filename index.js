const serverless = require("serverless-http");
const appModule = require("./dist/server");
const app = appModule.default || appModule;

module.exports = serverless(app);
