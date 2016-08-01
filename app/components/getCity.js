var React = require('react');
var PropTypes = React.PropTypes;

function Button(props){
  return(
    <button type='button'
            className='btn btn-lg btn-success'
            onClick={props.onSubmitCityName}>
        {props.children}
    </button>
  )
}

function GetCityDetails(props){
  return(
    <div>
      <input type="text" className="form-control" placeholder="Enter City" />
      <br/>
      <Button
        onSubmitCityName={props.onSubmitCityName}>
        Get Weather
      </Button>
    </div>
  )
}

GetCityDetails.propTypes = {
  onSubmitCityName: PropTypes.func.isRequired
}

module.exports = GetCityDetails;