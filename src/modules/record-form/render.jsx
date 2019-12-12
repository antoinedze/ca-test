const React = require('react');

module.exports = ({Form, Input, SubmitButton}, props) => (
  <Form className="button-wrapper">
    <div className="input-wrapper">
      <Input/>
    </div>
    <SubmitButton><span className="button-inner">{props.submitText}</span></SubmitButton>
  </Form>
)