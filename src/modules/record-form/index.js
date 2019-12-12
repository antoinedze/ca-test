const React = require('react');

const Form = require('jfactory-form');
const Expandable = require('jfactory-expandable');

const render = require('./render.jsx');

module.exports = new Form({
  title: 'Hello, world',
}, render, document.getElementById('root'))