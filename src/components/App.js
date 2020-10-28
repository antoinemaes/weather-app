import { connect } from 'react-redux';
import Location from './Location';
import Weather from './Weather';

function App(props) {
    return (
        <div>
            <Location />
            {props.location.present  && <Weather location={props.location.data}/>}
        </div>
    );
}

const AppContainer = connect(state => ({location: state.location}))(App);

export default AppContainer;