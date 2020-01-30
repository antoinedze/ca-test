const QueryString = require('querystring');
const React = require('react');
const ReactForm = require('wf-react-form');
const ReactRepeater = require('wf-react-repeater');

const Renders = require.context('./renders', false, /\.jsx$/);

module.exports = class RecordForm extends React.Component {
  constructor(props){
    super(props);
    
    this.ref = React.createRef();
  }
  
  componentDidMount(){
    this.ref.current.on('change', e => {
      let data = e.detail;
      console.log('Form is changed!');
    });
    this.ref.current.on('submit', e => {
      e.preventDefault();
      
      let data = e.detail;
      
      fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        },
        body: QueryString.encode(data)
      })
      .then(response => response.text())
      .then(response => {
        console.log(response);
      })
    })
  }
  
  render(){
    return React.createElement(ReactForm, {
      ref: this.ref,
      options: {
        type: 'div',
        title: this.props.title,
        data: this.props.data,
        fields: {
          name: {
            input: {
              name: 'client[name]',
              type: 'text',
            }
          },
          email: {
            input: {
              name: 'client[email]',
              type: 'email',
            }
          },
          phone: {
            input: {
              name: 'client[phone]',
              type: 'tel',
            }
          },
          staffId: {
            input: {
              name: 'record[staff_id]',
              type: 'select',
              options: [
                {value: 1, text: 'Ольга'},
                {value: 2, text: 'Мария'},
                {value: 3, text: 'Ксения'}
              ],
              valueDecorator: value => +value
            }
          },
          comment: {
            input: {
              name: 'record[comment]',
              type: 'textarea',
            }
          }
        },
        onSubmit: e => {
          console.log(e.detail);
        }
      },
      renders: {
        main: Renders('./main.jsx'),
        field: Renders('./field.jsx'),
      }
    })
  }
}