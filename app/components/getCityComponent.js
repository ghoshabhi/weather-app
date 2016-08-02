var React = require('react');
var PropTypes = React.PropTypes;

function GetCityComponent(props){
  return(
    <div>
      <input type="text"
             className="form-control"
             placeholder="Vadodara, Gujarat"
             onChange = {props.onUpdateCityName}/>
      <br/>
      <button type="button"
              style={{margin: 10}}
              className='btn btn-lg btn-success'
              onClick={props.onSubmitCityName}>
        Submit City
      </button>
    </div>
  )
}

GetCityComponent.propTypes = {
  onUpdateCityName: PropTypes.func.isRequired,
  onSubmitCityName: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired
}

module.exports = GetCityComponent;
