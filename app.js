const express = require('express');
const path = require('path');

var app = express();

var PORT = process.env.PORT || 4444;

app.listen(PORT, function() {
    console.log(`App listening on PORT ${PORT}`);
})