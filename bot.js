const linebot = require('linebot');
const express = require('express');

const bot = linebot({
    channelId: process.env.CHANNEL_ID,
    channelSecret: process.env.CHANNEL_SECRET,
    channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
    verify : false
});

// const bot = linebot({
//     channelId: '1506135042',
//     channelSecret: '2a8bcdb54ffacc3e2e0738c6760945dc',
//     channelAccessToken: '7W7vOpUHcf+tu7ydA26rdw4fVYmAmPwfZPFglzg1PIBZYVAYuyXgwYAHrJkfm2tZ5Ym7OnJT92MrJttX8/zTGLFLbX4+gVbgynEb7OgPBu2Ju/JqFhEx4GPrlevCXQkULKjMx7Zg0aHWWI2pzp5WKwdB04t89/1O/w1cDnyilFU=',
//     verify : false
// });

const app = express();

const linebotParser = bot.parser();

app.get('/', (req, res) => res.send('Webhook is running!'))
app.post('/linewebhook', linebotParser);

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