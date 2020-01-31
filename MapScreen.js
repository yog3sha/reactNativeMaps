import React, { Component } from 'react';
import MapView, { PROVIDER_GOOGLE, Callout } from 'react-native-maps';
import { Text } from 'react-native';

export class MapScreen extends Component {

    constructor(props){
        super(props)
    }

    state={
        // currentLocation : this.props.location
    }

    componentDidMount(){}

    render() {
        return (
            <>
             <MapView
                provider={PROVIDER_GOOGLE}
                style={{ minHeight: 300, minWidth: '90%', padding: 10 }}
                initialRegion={{
                  latitude: 13.0827,
                  longitude: 80.2707,
                  latitudeDelta: 0.001,
                  longitudeDelta: 0.001
                }}
                showsUserLocation={true}
              >
                <MapView.Marker
                  coordinate={{
                    latitude: 13.0827,
                    longitude: 80.2707
                  }}
                  title={"Your Location"}
                  draggable>
                  <Callout>
                    <Text>
                      Chennai
                      </Text>
                  </Callout>
                </MapView.Marker>
                {/* <MapView.Marker
                  coordinate={{
                    latitude: 10.5,
                    longitude: 10.5
                  }}
                  title={"Your Location"}
                  draggable /> */}
              </MapView>
                <Text> {this.state.currentLocation ? this.state.currentLocation : "Hello"} </Text>
            </>
        )
    }
}

export default MapScreen