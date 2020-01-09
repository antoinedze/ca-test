const React = require('react');

module.exports = ({Group}, props) => (
  <div className="group" data-group-key={props.dataKey}>
    <Group/>
  </div>
);