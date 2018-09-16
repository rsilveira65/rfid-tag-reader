/**
 * Node Modules
 */
const YAML = require('yamljs');

/*
 * Parses yaml pins file.
 */
const getPins = async () => await YAML.load(__dirname + '/../config/pins.yml');

module.exports = { getPins };