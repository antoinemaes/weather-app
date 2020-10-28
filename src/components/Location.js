import React from 'react';
import AlgoliaPlaces from 'algolia-places-react';
import { connect } from 'react-redux';
import { set as setLocation, clear as clearLocation } from '../redux/store';

class Location extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        this.props.setLocation(event.suggestion);
    }

    render() {
        return (
            <div>
                <AlgoliaPlaces       
                    placeholder = 'Search for locations ...'
                    onChange = {this.onChange}
                    options = {{
                        appId: 'plI6FM5EYKKG',
                        apiKey: 'c8f82016e5e249a62c775b56abde365b',
                        type: 'city'
                    }} 
                />
            </div>
        );
    }
}

const mapStateToProps = state => (state.location);
const mapDispatchToProps = { setLocation, clearLocation };

const LocationContainer = connect(mapStateToProps, mapDispatchToProps)(Location);

export default LocationContainer;
