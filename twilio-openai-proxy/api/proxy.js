const express = require('express');
const fetch = require('node-fetch');
const WebSocket = require('ws');

const app = express();
const PORT = process.env.PORT || 3000;

// Simple proxy route for testing
app.get('/', (req, res) => {
  res.send('Twilio-OpenAI Proxy is running');
});

// Example WebSocket handler (to connect Twilio <-> OpenAI)
app.get('/ws', (req, res) => {
  res.send('WebSocket endpoint placeholder');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
