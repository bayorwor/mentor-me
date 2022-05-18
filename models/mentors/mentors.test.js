const { Mentor } = require("./mentors.model");
const { ObjectId } = require("mongoose").Types;

describe("Mentors Model", () => {
  it("should create a new mentor", async () => {
    const mentor = await Mentor.create({
      name: "John Doe",
      email: "john@example.com",
      address: "123 Main St",
      phone: "123-456-7890",
      skills: "JavaScript",
      yearsOfExperience: 1,
      profession: "Developer",
      city: "New York",
      state: "NY",
      country: "USA",
      profile: "I am a mentor",
      user: new ObjectId(),
      numReviews: 0,
    });
    expect(mentor._id).toBeDefined();
  });
});
