const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

let todos = []

app.get("/", (req, res) => {
  res.json({ message: "Todo App Running!", total: todos.length })
})

app.get("/todos", (req, res) => {
  res.json(todos)
})

app.post("/todos", (req, res) => {
  const todo = { id: Date.now(), text: req.body.text, done: false }
  todos.push(todo)
  res.json(todo)
})

app.get("/health", (req, res) => {
  res.status(200).send("OK")
})

app.listen(PORT, () => console.log("Running on port " + PORT))