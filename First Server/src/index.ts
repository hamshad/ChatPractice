import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import * as fs from "node:fs";
import crypto from "crypto";

type DataProp = { id: string; name: string; avatar: string };

dotenv.config();
const app = express();
const port = process.env.PORT;
const data: DataProp[] = [];
const names = [
  "Hamshad",
  "Faizan",
  "Faisal",
  "Shivalay",
  "Saurabh",
  "Uday",
  "Prasanjeet",
];

console.log("Server has started");
for (let i = 0; i < names.length; i++) {
  const id = crypto.randomBytes(16).toString("hex");
  data.push({
    id: id,
    name: names[i],
    avatar: `https://ui-avatars.com/api/?name=${names[i]}&background=f55155&color=ffffff&rounded=true`,
  });
}
fs.writeFile(
  "./data/data.json",
  JSON.stringify(data, null, 2),
  "utf-8",
  (err) => {
    if (err) throw err;
    console.log("File created");
  }
);

app.use(cors());

app.get("/login", (req, res) => {
  console.log(req.params);
  res.send('{"message": "Successfully"}');
});

app.get("/users", (req, res) => {
  // console.log(Number.parseInt(req.query.id as string));
  // var i: number = req.query.id ? Number.parseInt(req.query.id as string) : 10;
  // var data: { id: number; title: string }[] = [
  //   { id: i, title: "TypeScript Server" },
  // ];
  // while (i-- > 1) data.push({ id: i, title: "TypeScript Server" });

  // console.log(data);
  var users: string = '{"error" : {"message": "Couldn\'t get users"}}';
  try {
    users = fs.readFileSync("./data/data.json", "utf-8");
  } catch (err) {
    console.log("ERROR", err);
  }
  res.send(users);
});

app.get("/", (req, res) => {
  res.status(404).send("<h1>OOPS!</h1><br/><h3>We couldn't find that</h3>");
  // res.redirect("/users");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
