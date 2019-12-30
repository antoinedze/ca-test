const React = require('react');

module.exports = ({Form, Title, Inputs, SubmitButton}, props) => (
  <Form className="form-wrapper">
    <div className="inputs-wrapper">
      <Inputs/>
    </div>
  </Form>
);