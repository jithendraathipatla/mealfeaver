import React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import Geocode from 'react-geocode';
Geocode.setApiKey('AIzaSyAv54LQ6DYJHNZQ48-UWbj1wH06uYTWMKQ');
function codeAddress(lat, lng) {
  // geocoder.geocode({ address: address }, function(results, status) {
  //   var city = results[0].address_components[2].long_name;
  //   var state = results[0].address_components[4].long_name;
  //   var country = results[0].address_components[5].long_name;
  //   //postalCode = results[0].address_components[6].long_name;
  //   // Example...
  //   alert(city);
  // });
  // Geocode.fromLatLng(lat, lng).then(
  //   response => {
  //     const address = response.results[0].formatted_address;
  //     console.log(address);
  //   },
  //   error => {
  //     console.error(error);
  //   }
  // );
}

export default function PlaceSearch(props) {
  const [address, setAddress] = React.useState(props.value);
  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null,
  });

  const handleSelect = async value => {
    setAddress(value);

    props.handleVenue(value);
    // geocodeByAddress(address)
    //   .then(results => getLatLng(results[0]))
    //   .then(latLng => codeAddress(latLng.lat, latLng.lng))
    //   .catch(error => console.error('Error', error));
  };

  return (
    <div>
      <PlacesAutocomplete
        value={address}
        onChange={e => {
          setAddress(e);
          props.handleVenue(e);
        }}
        onClick={handleSelect}
        onSelect={handleSelect}>
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <div className='field'>
              <div className='control has-icons-left'>
                <input
                  className='input'
                  {...getInputProps({
                    placeholder: 'Type address',
                  })}
                />
                <span className='icon is-left'>
                  <i className='fa fa-map-marker'></i>
                </span>
              </div>
            </div>

            <div>
              <div
                className={'is-hoverable'}
                style={{ backgroundColor: '#1f2933' }}>
                {suggestions.map(suggestion => {
                  const style = {
                    backgroundColor: suggestion.active ? '#1f2933' : 'black',
                    color: 'white',
                  };

                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, { style })}
                      className='is-hiddden'>
                      {' '}
                      <a className='list-item'>{suggestion.description}</a>{' '}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
}
