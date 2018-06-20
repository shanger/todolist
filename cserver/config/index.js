const development_env = require('./development');
const test_env = require('./test');
const production_env = require('./production');
module.exports = {
    development:development_env,
    test:test_env,
    production:production_env
}[process.env.NODE_ENV||'development']