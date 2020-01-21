const React = require('react');

const RecordForm = require('./modules/record-form');
const ReactRepeater = require('wf-react-repeater');

module.exports = (
  <div>
    {/*<RecordForm 
      title="Создать запись" 
      data={{
        name: 'Антон',
        email: 'vasya@mail.ru',
        phone: '89991234567',
        staffId: 2,
        comment: 'Описание'
      }}
    />*/}
    <ReactRepeater/>
  </div>
);
