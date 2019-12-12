
const RecordForm = require('./modules/record-form');




//var input = new Input;
//debugger;
//ReactDOM.render(React.createElement(Input, {value: 'Значение'}), document.body);
//debugger;

/*document.body.innerHTML = '<div id="root"></div>';  

var frame = class extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      data: props.data
    };
  }

  addRow(e){
    this.setState({
      data: this.state.data.concat('')
    });
  }

  removeRow(e, index){
    this.setState({
      data: this.state.data.filter((item, itemIndex) => itemIndex !== index)
    })
  }

  onChange(e, index){
    this.setState({data: Object.values({...this.state.data, ...{[index]: e.target.value}})})
  }
  
  render(){
    var rows = this.state.data.map((value, index) => React.createElement(row, {...{index, value}, ...{removeRow: this.removeRow.bind(this), onChange: this.onChange.bind(this)}})),
      rowsWrapper = React.createElement.apply(null, ['div', {className: 'expandable-rows'}].concat(rows)),
      addBtn = React.createElement('button', {className: 'add-btn', onClick: this.addRow.bind(this)}, 'Добавить');
    return React.createElement('div', {className: 'expandable'}, rows, addBtn);
  }
}

var row = class extends React.Component {
  render(){
    var element = React.createElement('input', {value: this.props.value, name: `person[${this.props.index}]name`, onChange: e => this.props.onChange(e, this.props.index)}),
      removeBtn = React.createElement('button', {className: 'remove-btn', onClick: e => this.props.removeRow(e, this.props.index)}, 'Удалить');
    return React.createElement('div', {className: 'expandable-row'}, element, removeBtn);
  }
}

ReactDOM.render(React.createElement(frame, {data: ['Вася','Петя', 'Коля', 'Маша']}), document.getElementById('root'))*/

/*let root = document.createElement('div');
root.id = 'root';
document.body.append(root);*/

/*let form = new Form({
  classList: ['shedule__create-record-form', 'circle-preloader'],
  title: 'Создать запись',
  labelAfter: ':',
  submitText: 'Создать',
  successTitle: 'Запись создана!',
  editModeEditTitle: 'Изменить запись',
  editModeEditSubmitText: 'Сохранить',
  editModeEditSuccessTitle: 'Запись успешно изменена!',
  editModeDeleteSubmitText: 'Удалить',
  editModeDeleteSuccessTitle: 'Запись удалена!',
  beforeInit(){
    
  },
  inputs: {
    id: {
      type: 'hidden',
      serializeDecorator: value => +value,
      hidden: true
    },
    client_id: {
      type: 'hidden',
      key: 'client[id]',
      serializeDecorator: value => +value,
      wrapper(){
        return this.options.custom.$inputsWrapper
      }
    },
    client_name: {
      name: 'Имя клиента',
      key: 'client[name]',
      type: 'text',
      required: true,
      className: 'disabled',
      wrapper(){
        return this.options.custom.$inputsWrapper
      }
    },
    client_phone: {
      name: 'Телефон',
      key: 'client[phone]',
      type: 'tel',
      pattern: '^\\+\\s*\\d(\\d|\\s)*$',
      patternValidity: 'Номер должен начинаться с "+", содержать только цифры, без скобок и тире',
      required: true,
      className: 'disabled',
      wrapper(){
        return this.options.custom.$inputsWrapper
      }
    },
    client_email: {
      name: 'Email',
      key: 'client[email]',
      type: 'email',
      className: 'disabled',
      wrapper(){
        return this.options.custom.$inputsWrapper
      }
    },
    staff_id: {
      name: 'Специалист',
      type: 'select',
      options: [{value: 1, name: 'Вася'}, {value: 2, name: 'Петя'}],
      value: 2,
      serializeDecorator: value => +value,
      onChange(e){
        this.renderInput('services');
      }
    },
    services: {
      name: 'Услуги',
      type: 'custom',
      content(){
        let expandable = new Expandable({
          element(data, index){
            let form = new Form({
              inputs: {
                id: {
                  name: 'Наименование',
                  type: 'select',
                  key: `services[${index}][id]`,
                  options(){
                    return new Promise(resolve => {
                      resolve([
                        {value: 'one', name: 'Один'},
                        {value: 'two', name: 'Два'}
                      ]);
                    })
                  },
                  className: 'service-name',
                  required: true,
                },
                quantity: {
                  name: 'Количество',
                  type: 'number',
                  key: `services[${index}][quantity]`,
                  value: 1,
                  className: 'service-quantity',
                  required: true,
                  disabled: true
                }
              }
            });
            return form.$wrapper.context;
          }
        });
        return expandable.$wrapper.context;
      },
      //serializeDecorator: data => data.map(service => ({id: +service.id, quantity: +service.quantity}))
    },
    /*date: {
      label: 'Дата',
      inputs: [{
        type: 'text',
        //mask: 'date',
        fillDecorator: value => new Date(value).toLocaleString('ru', {day: '2-digit', month: '2-digit', year: 'numeric'}),
        serializeDecorator: value => {
          let dateArr = value.split('.');
          return new Date([dateArr[1], dateArr[0], dateArr[2]].join('.')).toDateString();
        },
        value: new Date().toDateString(),
        onChange(e){
          this.renderRow('time');
        }
      }]
    },
    time: {
      label: 'Время',
      inputs: [{
        type: 'select',
        options(){
          let data = this.serialize(),
            date = new Date(data.date),
            {dayStart, dayLength, timeStep} = self.settings,
            timeFrom = date.setHours(dayStart.hours, dayStart.minutes, 0, 0),
            timeTo = timeFrom + dayLength,
            options = [];

          for(let time = timeFrom; time <= timeTo; time+=timeStep){
              let date = new Date(time);
              options.push({value: time, name: date.toLocaleString({}, {hour: '2-digit', minute: '2-digit'})});
          }
          return options;
        },
        serializeDecorator: value => +value
      }]
    },
    length: {
      label: 'Длительность сеанса',
      inputs: [{
        type: 'select',
        options: () => {
          let {dayLength, timeStep} = this.settings,
            options = [];
          for(let time = timeStep; time <= dayLength; time+=timeStep){
              let date = new Date(time),
                hours = date.getUTCHours(),
                minutes = date.getUTCMinutes();
              options.push({value: time, name: [hours ? hours : '0', minutes ? minutes : '00'].filter(v => v).join(':')});
          }
          return options;
        },
        serializeDecorator: value => +value,
        value: 3600000
      }]
    },
    attendance: {
      label: 'Статус',
      inputs: [{
        type: 'select',
        options: [
          {value: '0', name: 'Ожидание клиента'},
          {value: '1', name: 'Клиент пришел'},
          {value: '-1', name: 'Клиент не пришел'},
          {value: '2', name: 'Клиент подтвердил'},
        ]
      }]
    },
    comment: {
      label: 'Комментарий',
      inputs: [{
        type: 'textarea',
        placeholder: 'Пожелания клиента'
      }]
    },
  }
});*/
//debugger;