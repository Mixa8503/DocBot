'use srtict'
const Text = require('./StartText');
const table = new Text;
const TelegramBot = require('node-telegram-bot-api');

const token = '1675981367:AAFloUvIk-ikV-oFben8V06QDbrPylyGbwg';
const bot = new TelegramBot(token, {polling: true});
const temp = table.text();
console.log(temp);


bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, temp['text']);
});

bot.on('message', (msg) => {
    const hi = "привет";
    if (msg.text.toString().toLowerCase().indexOf(hi) === 0){
        bot.sendMessage(msg.chat.id,"Шо ты");
    }
    const stop = "stop";
    if (msg.text.toString().toLowerCase().includes(stop)){
        bot.sendMessage(msg.chat.id, "давай");
    }
});

