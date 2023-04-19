const express = require('express');
const router = require('./api/router');

const app = express();
app.use(router);

const port = process.env.PORT || '3000';
app.listen(port, console.log('ServiceA listening on port', port));