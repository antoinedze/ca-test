const React = require('react');
const Form = require('jfactory-form');
const Expandable = require('jfactory-expandable');

const Renders = require.context('./renders', false, /\.jsx$/);

module.exports = class RecordForm extends React.Component {
  constructor(props){
    super(props);
    
    this.clientForm = new Form({
      type: 'div',
      inputs: [
        {
          key: 'name',
          name: 'name',
          type: 'text',
          value: 'Вася'
        },
        {
          key: 'email',
          name: 'email',
          type: 'email',
          value: 'vasya@mail.ru'
        },
        {
          key: 'phone',
          name: 'phone',
          type: 'tel',
          value: '89991234567'
        }
      ]
    }, {
      form: Renders('./client-form.jsx'),
      input: Renders('./client-form-input.jsx'),
    });
    
    this.recordForm = new Form({
      type: 'div',
      inputs: [
        {
          key: 'master',
          name: 'master',
          type: 'text',
          value: 'Ольга'
        },
      ]
    }, {
      form: Renders('./record-form.jsx'),
      input: Renders('./record-form-input.jsx'),
    });
  }
  
  render(){
    return React.createElement('form', {
      onSubmit: e => {
        e.preventDefault();
        let data = this.recordForm.serialize();
        data.client = this.clientForm.serialize();
        console.log(data);
      }
    }, 
    this.clientForm.element, 
    this.recordForm.element,
    React.createElement('button', {type: 'submit'}, 'mainSubmit')
    );
  }
}