/**
 * Node Modules
 */
const YAML = require('yamljs');

/*
 * Parses yaml configuration file.
 */
const getParameters = async () => await YAML.load(__dirname + '/../config/config.yml');

module.exports = { getParameters };