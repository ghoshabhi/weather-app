var React = require('react');

var Main = React.createClass({
  render: function(){
    return(
      <div>
        <h1>MainJS Header</h1>
        {this.props.children}
      </div>
    )
  }
});

module.exports = Main;
