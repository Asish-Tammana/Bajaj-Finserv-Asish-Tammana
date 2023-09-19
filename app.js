const express = require("express");
const app = express();
app.use(express.json());

app.listen(process.env.PORT || 3000, () => {
  console.log("Server Running at http://localhost:3000/");
});

//API : BAJAJ GET

app.get("/bfhl/", async (request, response) => {
  try {
    response.status(200);
    response.send(JSON.stringify({ operation_code: 1 }));
  } catch (error) {
    res.status(400);
    response.send(JSON.stringify({ message: "Internal server error." }));
  }
});

//API : BAJAJ POST

app.post("/bfhl/", async (request, response) => {
  const givenData = request.body;

  const { data } = givenData;

  let numbers = [];
  let alphabets = [];

  for (let each of data) {
    const is_num = parseInt(each);

    if (isNaN(is_num)) {
      alphabets.push(each);
    } else {
      numbers.push(each);
    }
  }

  const highest_alphabet = [alphabets.sort().pop()];

  const outputResponse = {
    is_success: true,
    user_id: "john_doe_17091999",
    email: "john@xyz.com",
    roll_number: "ABCD123",
    numbers,
    alphabets,
    highest_alphabet,
  };

  response.send(outputResponse);
});

module.exports = app;
