'use strict'

const kb = require('./keyboard_buttons')

module.exports = {
    home: [
        [kb.home.teeth],[kb.home.desna]
    ],
    quest1:[
        [kb.quest.yes,kb.quest.no],
        [kb.back]
    ],
    quest2:[
        [kb.answer.optzf,kb.answer.optzs],
        [kb.answer.optzt,kb.answer.nothing],
        [kb.back]
    ],
    quest3:[
        [kb.answer.optdf],
        [kb.back]
    ]
};