const React = require('react');

const Form = require('jfactory-form');
const Expandable = require('jfactory-expandable');

const Renders = require.context('./renders', false, /\.jsx/);

module.exports = new Form({
  title: 'Hello, world',
}, {
  buttonWrapper: Renders('./button-wrapper.jsx')
}, document.getElementById('root'))