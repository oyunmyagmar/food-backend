import express, { Application, Request, Response } from "express";
import cors from "cors";

const app: Application = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Word 123");
});

app.post("/create-food", (req: Request, res: Response) => {
  console.log(req.body);
  if (req.body == undefined) {
    res.status(400).send("Error");
  }
  res.status(200).send("Success");
});

app.post("/create-category", (req: Request, res: Response) => {
  console.log(req.body);
  if (req.body == undefined) {
    res.status(400).send("Error");
  }
  res.status(200).send("Success");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
