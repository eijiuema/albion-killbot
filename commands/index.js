const { readdirSync } = require("fs");
const logger = require("../logger");

const commands = {};
const cmdFiles = readdirSync(__dirname);
cmdFiles.forEach(cmdFile => {
  if (cmdFile === "index.js") return;
  try {
    logger.info(`Loading command: ${cmdFile}`);
    const command = require(`./${cmdFile}`);
    commands[command.aliases[0]] = command;
  } catch (e) {
    logger.error(`Error loading command ${cmdFile}: ${e}`);
  }
});

module.exports = commands;
