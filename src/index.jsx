const React = require('react');

const RecordForm = require('./modules/record-form');

module.exports = (
  <div>
    <RecordForm 
      title="Создать запись" 
      data={{
        name: 'Антон',
        email: 'vasya@mail.ru',
        phone: '89991234567',
        staffId: 2,
        comment: 'Описание'
      }}
    />
  </div>
);
