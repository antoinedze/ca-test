const Form = require('jfactory-form');
const Expandable = require('jfactory-expandable');

const renders = require.context('./renders', false, /\.jsx$/);

module.exports = new Form({
  //title: 'Форма',
  inputs: [
    {
      key: 'name',
      name: 'name',
      value: 'Вася'
    },
    {
      key: 'age',
      name: 'age',
      value: '16'
    }
  ]
}, renders, document.getElementById('root'))

