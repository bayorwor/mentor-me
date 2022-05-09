const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");

let mongoServer;

// For mongodb-memory-server's old version (< 7) use this instead:
// const mongoServer = new MongoMemoryServer();

const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

// Provide connection to a new in-memory database server.
const connect = async () => {
    // NOTE: before establishing a new connection close previous
    await mongoose.disconnect();

    mongoServer = await MongoMemoryServer.create();

    const mongoUri = await mongoServer.getUri();
    await mongoose.connect(mongoUri, opts);
};

// Remove and close the database and server.
const close = async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
};

// Remove all data from collections
const clear = async () => {
    const { collections } = mongoose.connection;

    // eslint-disable-next-line no-restricted-syntax
    for (const key in collections) {
        if (collections[key]) {
            collections[key].deleteMany();
        }
    }
};

module.exports = {
    connect,
    close,
    clear,
};
