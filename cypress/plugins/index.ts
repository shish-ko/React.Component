import task from '@cypress/code-coverage/task';
module.exports = (on, config) => {
  task(on, config);

  // add other tasks to be registered here

  // IMPORTANT to return the config object
  // with the any changed environment variables
  return config;
};
