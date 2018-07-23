import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

const usersMap = props => {

	let userLocationMarker = null;

	if(props.userLocation){
		userLocationMarker = <MapView.Marker coordinate={props.userLocation}/>
	}

	const usersMarkers = props.usersPlaces.map(userPlace => (
	 <MapView.Marker coordinate={userPlace} key= {userPlace.id}/>
	 ));

	return(
		<View style={styles.mapContainer}>
			<MapView 

			initialRegion ={{

				latitude: 12.9716,
				longitude: 77.5946,
				latitudeDelta: 0.0012,
				longitudeDelta:0.0001,


			}}

			region={props.userLocation}
			style={styles.map} 

			>
				{userLocationMarker}
				{usersMarkers}
			</MapView>
		 </View>
		);
};

const styles = StyleSheet.create({
	mapContainer: {
		width: '100%',
		height: 200
	},

	map: {
		width: 500,
		height:800

	}

})

export default usersMap;