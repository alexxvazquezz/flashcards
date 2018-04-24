const express = require('express');
const cardRouter = express.Router();
const { data } = require('../data/flashcardData.json') //same as .data at the end
const { cards } = data //data.cards



cardRouter.get('/:id', (req, res) => {
    const { side } = req.query //same as.
    const { id } = req.params; // id of query string
    const text = cards[id][side]; // ?side=text 
    const { hint } = cards[id]; 
    const templateData = { text, hint }
    console.log(side)
    if(side === 'question') {
        res.render('cards', {
        text: cards[id][side],
        hint: cards[req.params.id].hint
        });
    } else {
        res.render('cards',{
            text: cards[id][side]
        });
    }
});

module.exports = cardRouter;