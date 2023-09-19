import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = () => {
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    // Lấy dữ liệu feature từ GeoServer
    fetch('https://geoserver.ctu.edu.vn/geoserver/ctu/wfs?service=WFS&version=1.0.0&request=GetFeature&typeNames=ctu:room_by_floor&outputFormat=application/json')
      .then(response => response.json())
      .then(data => {
        // Xử lý dữ liệu feature và cập nhật state markers
        const features = data.features;
        const mapMarkers = features.map(feature => ({
          id: feature.id,
          coordinate: {
            latitude: feature.geometry.coordinates[1],
            longitude: feature.geometry.coordinates[0],
          },
        }));
        setMarkers(mapMarkers);
      });
  }, []);

  return (
    <View style={styles.container}>
      <MapView style={styles.map}>
        {markers.map(marker => (
          <Marker key={marker.id} coordinate={marker.coordinate} />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default MapScreen;
