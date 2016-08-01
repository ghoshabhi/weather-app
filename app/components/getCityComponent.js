var React = require('react');
var PropTypes = React.PropTypes;

function GetCityComponent(props){
  return(
    <div>
      <input type="text"
             className="form-control"
             placeholder="Vadodara, Gujarat"/>
      <br/>
      <button type="button"
              style={{margin: 10}}
              className='btn btn-lg btn-success'
              onSubmit={props.onSubmitCityName}>
        Submit City
      </button>
    </div>
  )
}

GetCityComponent.propTypes = {
  onSubmitCityName: PropTypes.func.isRequired
}

module.exports = GetCityComponent;
