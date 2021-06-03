'use srtict'

const Text = require('./StartText');
const messg = new Text;
const TelegramBot = require('node-telegram-bot-api');

const token = '1675981367:AAFloUvIk-ikV-oFben8V06QDbrPylyGbwg';
const bot = new TelegramBot(token, {polling: true});
const temp = messg.text();

bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, temp['text'],{
        reply_markup: {
            keyboard: [["Зубы","Десна"]]
        }
    });
});

bot.on('message', (msg) => {
    bot.sendMessage(msg.chat.id,"closing",{
        reply_markup: {
            remove_keyboard: true
        }
    });
    if(msg.text === 'Зубы'){
        bot.sendMessage(msg.chat.id, "Есть ли у вас боль при накусывании или приёме пищи?"),{
            reply_markup:{
            keyboard: [["Да","Нет"]]
          }
        }
    }
});
