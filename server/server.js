const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(cors());

app.get('/api/orders', (req, res) => {
  const filePath = path.resolve(__dirname, './data/orders.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return res.status(500).json({ error: 'Unable to read orders file' });
    }
    res.status(200).json(JSON.parse(data));
  });
});

app.get('/', (req, res) => {
  res.send('Orders api');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
