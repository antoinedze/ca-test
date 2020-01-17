const React = require('react');

module.exports = ({Form, Title, Fields, SubmitButton}, props) => (
  <Form className="form-wrapper">
    <Title/>
    <div className="fields">
      <Fields/>
    </div>
    <SubmitButton/>
  </Form>
);