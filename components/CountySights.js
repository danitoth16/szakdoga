import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const CountySights = ({ route }) => {
  const navigation = useNavigation();
  const { county, sights } = route.params;

  const [currentLocation, setCurrentLocation] = React.useState();

  const handlePress = (item) => {
    navigation.navigate("Profile", { item, currentLocation });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.sightContainer}
      onPress={() => handlePress(item)}
    >
      <Text style={styles.sightTitle}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>{county}</Text>
      </View>
      <FlatList
        data={sights}
        renderItem={renderItem}
        keyExtractor={(item) => item}
        horizontal
        pagingEnabled
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  backButton: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  sightContainer: {
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    margin: 8,
    padding: 16,
    width: 300,
    height: 400,
    justifyContent: "center",
    alignItems: "center",
  },
  sightTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default CountySights;
