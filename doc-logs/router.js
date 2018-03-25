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
    language: 'javascript',
    content: `router.get('/', (req, res) => {
    return res.json(dummyLog);
});`
  },
  {
    component_type: 'my-code-snippet',
    language: 'bash',
    content: `npm i moment`
  },
  {
    component_type: 'my-code-snippet',
    language: 'python',
    content: `def happyBirthdayEmily(): #program does nothing as written
    print("Happy Birthday to you!")
    print("Happy Birthday to you!")
    print("Happy Birthday, dear Emily.")
    print("Happy Birthday to you!");
});`
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

const {DocLog} = require('./models');

const router = express.Router();

const jsonParser = bodyParser.json();

// Post to register a new log
router.post('/', jsonParser, (req, res) => {
  return res.json(req.body);
});

router.get('/', (req, res) => {
  return res.json(dummyLog);
});

module.exports = {router};
