const linebot = require('linebot');
const express = require('express');

const bot = linebot({
    channelId: process.env.CHANNEL_ID,
    channelSecret: process.env.CHANNEL_SECRET,
    channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
    verify : true
});

const app = express();

const linebotParser = bot.parser();

app.get('/', (req, res) => res.send('Webhook is running!'))
app.post('/webhook', linebotParser);

bot.on('message', function (event) {
    var reply = 'You say : ' + event.message.text
    event.reply(reply).then(function (data) {
        console.log('Success', data);
    }).catch(function (error) {
        console.log('Error', error);
    });
});

app.listen(process.env.PORT || 8080, function () {
    console.log('LineBot is running.');
});