const { Mentor } = require("./mentors.model");
const { ObjectId } = require("mongoose").Types;

describe("Mentors Model", () => {
  it("should create a new mentor", async () => {
    const mentor = await Mentor.create({
      name: "John Doe",
      email: "john@example.com",
      address: "123 Main St",
      phone: "123-456-7890",
      profile: "I am a mentor",
    });
    expect(mentor._id).toBeDefined();
  });
});
