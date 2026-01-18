const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/tshirt', (req, res)=> {
  res.status(200).send({
    tshirt: 'polo',
    size: 'large',
    tag: '1234'
  })
});

app.post('/tshirt/:id', (req, res) => {
  const { id } = req.params;
  const { logo } = req.body;

  if (!logo) {
    res.status(418).send({ message: 'we need logo!'})
  }

  res.send({
    tshirt: ` tshirt with your ${logo} and ID of ${id}`,
  });

});

app.get("/", (req, res) => {
  res.send(`Node.js server is running OK on http://localhost:${PORT}`);
});

app.listen(PORT, () => {
  console.log("Server listening on port 3000");
});
