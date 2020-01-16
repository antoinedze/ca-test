const React = require('react');

const RecordForm = require('./modules/record-form');

module.exports = (
  <div>
    <RecordForm 
      title="Создать запись" 
      data={{
        client: {
          name: 'Антон',
          email: 'vasya@mail.ru',
          phone: '89991234567'
        },
        record: {
          staffId: 2,
          comment: 'Описание'
        }
      }}
    />
  </div>
);
