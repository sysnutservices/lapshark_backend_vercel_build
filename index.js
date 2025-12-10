const serverless = require("serverless-http");
const app = require("./dist/server");   // MUST return the Express app

module.exports = serverless(app);
