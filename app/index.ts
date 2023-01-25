import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send({
    mesage: "Hi from ts",
  });
});

const port: number = Number(process.env.PORT || 3000);

app.listen(port, () => console.log(`🚀 on ${port}`));
