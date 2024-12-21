const express = require("express");

const { collection, ex_collection, in_collection } = require("./mongo");

const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post("/", async (req, res) => {
  const { email, password } = req.body;
  try {
    const check = await collection.findOne({ email: email });
    if (check) {
      res.json("exist");
    } else {
      res.json("notexist");
    }
  } catch (e) {
    res.json("notexist");
  }
});

app.post("/Signup", async (req, res) => {
  const { email, password, fname, lname } = req.body;
  const data = {
    email: email,
    password: password,
    fname: fname,
    lname: lname,
  };
  try {
    const check = await collection.findOne({ email: email });
    if (check) {
      res.json("exist");
    } else {
      await collection.insertMany(data); // Use insertOne instead of insertMany
      res.json("notexist");
    }
  } catch (e) {
    console.error("Error while signing up:", e);
    res.status(500).json("error");
  }
});

app.post("/Expense", async (req, res) => {
  const { date, account, amount, category, description } = req.body;
  if (!date || !account || !amount || !category || !description) {
    return res
      .status(500)
      .json({ message: "Please provide all required fields" });
  }
  const ex_data = {
    date: date,
    account: account,
    amount: amount,
    category: category,
    description: description,
  };
  try {
   
      await ex_collection.insertMany([ex_data]);
      
  } catch (e) {
    res.json("notexist");
  }
});
app.get("/Expenses", async (req, res) => {
  try {
      const expenses = await ex_collection.find();
      res.json(expenses);
  } catch (error) {
      console.error("Error fetching expenses:", error);
      res.status(500).json({ message: "Internal server error" });
  }
});


app.post("/Income", async (req, res) => {
  const { in_date, in_income, in_category, in_description } = req.body;
  if (!in_date || !in_income || !in_category || !in_description) {
    return res
      .status(500)
      .json({ message: "Please provide all required fields" });
  }
  const in_data = {
    in_date: in_date,
    in_income: in_income,
    in_category: in_category,
    in_description: in_description,
  };
  
  
      await in_collection.insertMany([in_data]);
      
    
});



app.get("/Income", async (req, res) => {
  try {
      const incomes = await in_collection.find();
      res.json(incomes);
  } catch (error) {
      console.error("Error fetching expenses:", error);
      res.status(500).json({ message: "Internal server error" });
  }
});

// Start server
app.listen(8000, () => {
  console.log("Server connected on port 8000");
});

