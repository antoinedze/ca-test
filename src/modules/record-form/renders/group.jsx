const React = require('react');

module.exports = ({Fields}, props) => (
  <div className="group" data-group-key={props.dataKey}>
    <div className="group-label">{props.dataKey}</div>
    <div className="group-fields">
      <Fields/>
    </div>
  </div>
);