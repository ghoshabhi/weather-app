var React = require('react');
var GetCity = require('../components/getCityComponent');

var GetCityContainer = React.createClass({
  handleSubmitCity: function(){
    console.log('Get City Registered!');
  },
  render: function(){
    return(
      <GetCity
        onSubmitCityName={this.handleSubmitCity} />
    )
  }
});

module.exports = GetCityContainer;
