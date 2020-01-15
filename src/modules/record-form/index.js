const React = require('react');
const Form = require('jfactory-form');
const Expandable = require('jfactory-expandable');

const Renders = require.context('./renders', false, /\.jsx$/);

module.exports = class RecordForm extends React.Component {
  constructor(props){
    super(props);
    
    this.form = new Form({
      type: 'div',
      title: this.props.title,
      data: {
        client: {
          name: this.props.data.name
        }
      },
      inputsGroups: {
        client: {
          inputs: {
            name: {
              input: {
                name: 'name',
                type: 'text',
                value: this.props.data.name
              }
            },
            email: {
              input: {
                name: 'email',
                type: 'email',
                value: 'vasya@mail.ru'
              }
            },
            phone: {
              input: {
                name: 'phone',
                type: 'tel',
                value: '89991234567'
              }
            }
          }
        },
        record: {
          inputs: {
            staffId: {
              input: {
                name: 'staff_id',
                type: 'select',
                options: [
                  {value: 1, text: 'Ольга'},
                  {value: 2, text: 'Мария'},
                  {value: 3, text: 'Ксения'}
                ],
                value: 2,
                valueDecorator: value => +value
              }
            },
            comment: {
              input: {
                name: 'comment',
                type: 'textarea',
                value: 'Описание'
              }
            }
          }
        },
      }
    }, Renders);
    
    this.form.on('change', e => {
      let data = e.data;
      console.log('Form is changed!');
    });
    this.form.on('submit', e => {
      let data = e.data;
      console.log('Form is submitted!');
    })
  }
  
  render(){
    return this.form.element();
  }
}