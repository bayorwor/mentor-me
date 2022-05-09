process.env.NODE_ENV = "test";
const { connect, close } = require("./setup-test-db");

beforeAll(async () => {
    await connect();
});

// beforeEach(async () => {
//     await clear();
// });

afterAll(async () => {
    await close();
});
