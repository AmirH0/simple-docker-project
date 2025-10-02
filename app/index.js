const express = require('express');
const os = require('os');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`Hello — served by container hostname: ${process.env.HOSTNAME} (${os.hostname()})`);
});

app.get('/health', (req, res) => res.send('ok'));

app.listen(port, () => console.log(`Listening on ${port}`));
