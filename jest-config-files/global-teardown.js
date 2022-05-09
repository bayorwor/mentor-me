const { close } = require("./setup-test-db");

module.exports = async () => {
    await close();
};
