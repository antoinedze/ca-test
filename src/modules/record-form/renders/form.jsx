const React = require('react');

module.exports = ({Form, Title, Inputs, SubmitButton}, props) => (
  <Form className="button-wrapper">
    <Title>{props.title}</Title>
    <div className="inputs-wrapper">
      <Inputs/>
    </div>
    <SubmitButton>
      <span className="button-inner">{props.submitText}</span>
    </SubmitButton>
  </Form>
);