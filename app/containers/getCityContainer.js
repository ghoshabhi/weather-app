var React = require('react');
var GetCity = require('../components/getCity');

var GetCityContainer = React.createClass({
  handleGetCity: function(){
    console.log('Get City Registered!');
  },
  render: function(){
    return(
      <GetCity
        onSubmitCityName={this.handleGetCity} />
    )
  }
});

module.exports = GetCityContainer;
