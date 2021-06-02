'use srtict'

const Text = require('./StartText');
const messg = new Text;
const TelegramBot = require('node-telegram-bot-api');

const token = '1675981367:AAFloUvIk-ikV-oFben8V06QDbrPylyGbwg';
const bot = new TelegramBot(token, {polling: true});
const temp = messg.text();

bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, temp['text']);
});

bot.on('message', (msg) => {
    const hi = "привет";
    if (msg.text.toString().toLowerCase().indexOf(hi) === 0){
        bot.sendMessage(msg.chat.id,"Привет");
    }
    const stop = "stop";
    if (msg.text.toString().toLowerCase().includes(stop)){
        bot.sendMessage(msg.chat.id, "see ya");
    }
});

