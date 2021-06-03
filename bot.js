'use srtict'

const TelegramBot = require('node-telegram-bot-api');
const StartText = require('./StartText');
const kb = require('./keyboard_buttons');
const keyboard = require('./keyboard');
const keyboard_buttons = require('./keyboard_buttons');

const token = '1675981367:AAFloUvIk-ikV-oFben8V06QDbrPylyGbwg';
const bot = new TelegramBot(token, {polling: true});


bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, StartText.text,{
        reply_markup: {
            keyboard: keyboard.home,
            resize_keyboard: true
        }
    });
});

bot.on('message', (msg) => {
    switch(msg.text){
        case kb.home.teeth:
            bot.sendMessage(msg.chat.id,"Есть ли у вас боль при накусывнии или приёме пищи?",{
                reply_markup:{
                    keyboard: keyboard.quest1,
                    resize_keyboard: true
                }
            });
            break;
        case kb.home.desna:
            break;
    }
});