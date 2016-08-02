var React = require('react');
var PropTypes = require('react').PropTypes;
var GetCity = require('../components/getCityComponent');

var GetCityContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function(){
    return {
      city: 'Default,City'
    }
  },
  handleSubmitCity: function(e){
    e.preventDefault()
    console.log(this.state.city)
    this.context.router.push('/forecast/' + this.state.city)
  },
  handleUpdateCity: function(e){
    this.setState({
      city: e.target.value
    })
  },
  render: function(){
    return(
      <GetCity
        onSubmitCityName = {this.handleSubmitCity}
        onUpdateCityName = {this.handleUpdateCity}
        city = {this.state.city} />
    )
  }
});

module.exports = GetCityContainer;
