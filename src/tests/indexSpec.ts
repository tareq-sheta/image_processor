import resizer from "../routes/api/fruits_resize";

import { pre, post } from "../routes/processing";
import supertest from "supertest";
import app from "../index";
// import process from "../routes/processing";

import path from "path"; // importing required files
describe("testing input and output directories", () => {
  it("check the directory of input images", () => {
    expect(pre).toBe(path.resolve("./my input images"));
  })
  it("check the directory of output images", () => {
    const myVar = path.resolve("./my processed images");
    expect(post).toEqual(myVar);
    // console.log(postPrcessDir, path.resolve("./my processed images"));
  })
});

it("check the output of image processing function(resizer)", async () => {
  expect(await resizer("apple", "40", "60")).toEqual(
    path.resolve("./my processed images/apple_40x60.jpg")
  );
})

const request = supertest(app);
describe("(testing endpoint)", () => {
  // side note : in the classroom they use "done"as a parameter => DO NOT USE "done" IT CAUSED ERRORS HERE
  it("check the endpoint", async () => {
    const response = await request.get("/image");
    expect(response.status).toBe(200)
  });
})
