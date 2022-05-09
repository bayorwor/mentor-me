const { connect } = require("./setup-test-db");

module.exports = async () => {
    await connect();
};
