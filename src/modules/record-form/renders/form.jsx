const React = require('react');

module.exports = ({Form, Inputs, SubmitButton}, props) => (
  <Form className="button-wrapper">
    <div className="input-wrapper">
      <Inputs/>
    </div>
    <SubmitButton><span className="button-inner">{props.submitText}</span></SubmitButton>
  </Form>
);
//module.exports = void(0);