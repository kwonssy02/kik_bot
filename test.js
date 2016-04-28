'use strict';

let util = require('util');
let http = require('http');
let Bot  = require('@kikinteractive/kik');

// Configure the bot API endpoint, details for your bot
let bot = new Bot({
    username: 'kwonssy02',
    apiKey: '552749d9-1b6b-4ae5-903d-bb07c812aa59',
    baseUrl: 'https://kik-echobot.ngrok.io/'
});

bot.updateBotConfiguration();

bot.onTextMessage((message) => {
    message.reply(message.body);
});

// Set up your server and start listening
let server = http
    .createServer(bot.incoming())
    .listen(process.env.PORT || 3000);
