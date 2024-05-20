const bodyParser = require('body-parser');
const express = require('express');
const server = express();

const PORT = process.env.PORT || 5000;

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

server.get('/', (req, res) => {
    res.status(200).json({message: 'Testing Api...', env_process: process.env});
})

server.get('/post', (req, res) => {
    res.status(200).json({message: 'Latest news: BJP wins by huge margin. Once again BJP.'});
})

server.listen(PORT, () => {
    console.log("Server running on port",PORT)
})

process.on('uncaughtException', function(err) {
    process.exit(0);
})