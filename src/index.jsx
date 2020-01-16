const React = require('react');

const RecordForm = require('./modules/record-form');

module.exports = (
  <div>
    <RecordForm title="Создать запись" data={{name: 'Антон'}}/>
  </div>
);