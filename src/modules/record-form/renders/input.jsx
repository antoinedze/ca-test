const React = require('react');

module.exports = ({Input}, props) => (
  <div className="input-wrapper">
    <Input className={props.input.type}/>
  </div>
);