const express = require('express');

const port = 3000;
const ser = express();
ser.listen(port,() => console.log(" server is ready to use"));

console.log(ser);