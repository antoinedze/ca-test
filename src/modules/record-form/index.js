const Form = require('jfactory-form');
const Expandable = require('jfactory-expandable');

const renders = require.context('./renders', false, /\.jsx$/);

module.exports = new Form({
  title: 'Форма',
  inputs: [
    {
      value: 'One'
    },
    {
      value: 'Two'
    }
  ]
}, renders, document.getElementById('root'))

