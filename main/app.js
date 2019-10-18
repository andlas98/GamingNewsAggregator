const express = require('express')
const app = express()
// Change channel's value to...change the channel
var channel = 3030;

app.use(express.static('public'));

app.listen(channel, () => console.log("Runnin' hot data on port " + channel + "..."))
