const React = require('react');

module.exports = ({Input}, props) => (
  <div className="field">
    <Input className={props.input.type}/>
  </div>
);