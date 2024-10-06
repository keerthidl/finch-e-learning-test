const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

let users = [];

app.post("/user",(req, res) =>{
    const user = {
        id:users.length + 1,
        name:req.body.name,
        email:req.body.email,
        age:req.body.age
    }

    users.push(user)
    res.status(201).json(user)
})

app.get("/user",(req, res)=>{
    res.json(users)
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
