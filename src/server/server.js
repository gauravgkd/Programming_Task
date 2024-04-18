const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/task')
  .then(() => console.log('MongoDB connected successfully!'))
  .catch(err => console.error('Failed to connect to MongoDB:', err));


app.get('/', (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html>
    <head>
      <title>Server Page</title>
      <style>
        body {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 300px;
        }
        h1 {
          text-align: center;
        }
      </style>
    </head>
    <body>
      <h1>Hello from the server!</h1>
    </body>
  </html>
`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
