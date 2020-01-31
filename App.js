/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useEffect, Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
  TextInput,
  Alert
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import MapView, { PROVIDER_GOOGLE, Callout } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import MapScreen from './MapScreen';

// const App: () => React$Node = () => {
export class App extends Component {
  constructor() {
    super()
  }
  state = {
    // pickupLocation: null,
    // dropLocation: null,
    location: null,
    newLocation: [],
    region: {
      latitude: 13.0827,
      longitude: 80.2707,
      latitudeDelta: 0.001,
      longitudeDelta: 0.001
    }
  }

  onRegionChange = (region) => {
    this.setState({ region });
  }

  onMarkerPress = (region) => {
    Alert.alert("new Coordinates: ",region.coordinate.latitude)
    this.setState({newRegion: region.coordinate})
  }

  componentDidMount() {
    Geolocation.getCurrentPosition(info => {
      // Alert.alert("Location: ", JSON.stringify(info));
      // this.setState({ location: JSON.stringify(info) })
    })
  }

  render() {

    return (
      <>
        {/* <StatusBar barStyle="dark-content" /> */}
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            {/* <Header /> */}

            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <View>
                  <Text >Pickup Point: {this.state.newRegion} </Text>
                  {/* <Text> {pickupLocation ? pickupLocation : null} </Text> */}
                  <Button
                    title={this.state.pickupLocation == null ? "Select" : "Change"}
                    color="#f194ff"
                    onPress={() => Alert.alert('Button with adjusted color pressed')}
                  />
                </View>
                <View>
                  <Text >Drop Point: </Text>
                  <TextInput />
                </View>

                <MapView
                  provider={PROVIDER_GOOGLE}
                  style={{ minHeight: 300, minWidth: '90%', padding: 10 }}
                  initialRegion={{
                    latitude: 13.0827,
                    longitude: 80.2707,
                    latitudeDelta: 0.001,
                    longitudeDelta: 0.001
                  }}
                  // onRegionChange={this.onRegionChange}
                  showsUserLocation={true}
                >
                  <MapView.Marker
                    coordinate={{
                      latitude: 13.0827,
                      longitude: 80.2707
                    }}
                    onDragEnd = {this.onMarkerPress}
                    title={"Your Location"}
                    draggable>
                    <Callout>
                      <Text>
                        Chennai
                      </Text>
                    </Callout>
                  </MapView.Marker>
                </MapView>
                <Text> {this.state.newRegion} </Text>

              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
