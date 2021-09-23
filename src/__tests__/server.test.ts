import app from "../index";
import supertest from "supertest";

test("GET /api/hello", async () => {
  await supertest(app)
    .get("/api/hello")
    .expect(200)
    .then((res) => {
      expect(res.body.value).toEqual("Hello 世界");
    });
});
