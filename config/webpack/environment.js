const { environment } = require("@rails/webpacker");

const ignoreLoader = require("./loaders/ignore");
environment.loaders.append("ignore", ignoreLoader);

module.exports = environment;
