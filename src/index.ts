import express, { Application, Request, Response } from "express";
import cors from "cors";

const app: Application = express();
const port = 3000;

const categories = [{ categoryName: "Apetizers" }, { categoryName: "Salads" }];
const foods = [
  {
    foodName: "Grilled Chicken cobb salad",
    price: 20,
    ingredients:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
  },
  {
    foodName: "Burrata Caprese",
    price: 20,
    ingredients:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
  },
];

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Word 123");
});

app.get("/categories", (req: Request, res: Response) => {
  res.send({ text: "succes", data: categories });
});

app.get("/foods", (req: Request, res: Response) => {
  res.send({ text: "succes", data: foods });
});

app.post("/create-food", (req: Request, res: Response) => {
  const { foodName, price, ingredients } = req.body;
  console.log(req.body);

  if (req.body == undefined) {
    res.status(400).send("Error");
  }
  res.status(200).send("Success");

  foods.unshift({ foodName, price, ingredients });
});

app.post("/create-category", (req: Request, res: Response) => {
  const { categoryName } = req.body;
  console.log(req.body);

  if (req.body == undefined) {
    res.status(400).send("Error");
  }
  res.status(200).send("Success");

  categories.unshift({ categoryName });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
