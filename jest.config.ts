const { getJestProjectsAsync } = require('@nx/jest');
const { Config } = require('jest');

module.exports = async (): Promise<Config> => ({
  projects: await getJestProjectsAsync(),
});
