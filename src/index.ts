import express from "express";

const app = express();

app.get("/api/hello", (_, res) => {
  res.json({ value: "Hello 世界" });
});

export default app;
