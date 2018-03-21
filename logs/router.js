'use strict';

const dummyLog = [
  {
    component_type: 'my-text-title',
    main_title: "An Introduction to DocLog and Why it's useful",
    title_metadata: {
      date: 'March 19, 2017',
      view_count: '1.2'
    }
  },
  {
    component_type: 'my-text-blob',
    subtitle: 'Introduction',
    content: "Lorem ipsum dolor amet dIY gluten-free hell of tumblr vaporware tilde XOXO photo booth mixtape quinoa VHS offal. Tattooed waistcoat helvetica literally hammock, deep v raw denim man braid tumblr. Jean shorts thundercats mlkshk, skateboard enamel pin cold-pressed man bun lomo locavore XOXO. Biodiesel fingerstache ennui mustache twee pork belly brunch tattooed intelligentsia pitchfork whatever four dollar toast VHS church-key sustainable. Beard portland affogato green juice shabby chic, kale chips copper mug dreamcatcher gastropub snackwave taxidermy subway tile. Tacos four loko kitsch, freegan thundercats deep v palo santo 8-bit cliche offal copper mug ugh fingerstache. Fam selvage vinyl literally jianbing taiyaki."
  },
  {
    component_type: 'my-code-snippet',
    content: `function sup(){console.log('yo');
    }`
  },
  {
    component_type: 'my-text-blob',
    subtitle: 'Let\'s Take a Look',
    content: "Lorem ipsum dolor amet dIY gluten-free hell of tumblr vaporware tilde XOXO photo booth mixtape quinoa VHS offal. Tattooed waistcoat helvetica literally hammock, deep v raw denim man braid tumblr. Jean shorts thundercats mlkshk, skateboard enamel pin cold-pressed man bun lomo locavore XOXO."
  },
  {
    component_type: 'my-display-image',
    content: 'https://i.imgur.com/0FB6LAi.png'
  },
  {
    component_type: 'my-text-blob',
    subtitle: 'Let\'s Take a Look',
    content: "Lorem ipsum dolor amet dIY gluten-free hell of tumblr vaporware tilde XOXO photo booth mixtape quinoa VHS offal. Tattooed waistcoat helvetica literally hammock, deep v raw denim man braid tumblr. Jean shorts thundercats mlkshk, skateboard enamel pin cold-pressed man bun lomo locavore XOXO. Biodiesel fingerstache ennui mustache twee pork belly brunch tattooed intelligentsia pitchfork whatever four dollar toast VHS church-key sustainable. Beard portland affogato green juice shabby chic, kale chips copper mug dreamcatcher gastropub snackwave taxidermy subway tile. Tacos four loko kitsch, freegan thundercats deep v palo santo 8-bit cliche offal copper mug ugh fingerstache. Fam selvage vinyl literally jianbing taiyaki."
  }
]

const express = require('express');
const bodyParser = require('body-parser');

const {Log} = require('./models');

const router = express.Router();

const jsonParser = bodyParser.json();

// Post to register a new log
router.post('/', jsonParser, (req, res) => {
  // yet to be determined
});

router.get('/', (req, res) => {
  return res.json(dummyLog);
});

module.exports = {router};
