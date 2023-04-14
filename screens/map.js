import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

import { COLORS, FONTS, icons, SIZES, GOOGLE_API_KEY } from "../constans";

const Map = ({ route, navigation }) => {
  function renderMap() {
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={StyleSheet.absoluteFillObject}
          provider={MapView.PROVIDER_GOOGLE}
        ></MapView>
      </View>
    );
  }

  return <View style={{ flex: 1 }}>{renderMap()}</View>;
};

export default Map;
