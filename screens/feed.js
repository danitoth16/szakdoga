import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";

import FeedData from "../data/data2";

import { COLORS, icons, images, SIZES, FONTS } from "../constans";

const Feed = ({ navigation }) => {
  const initialCurrentLocation = {
    streetName: "Adony",
    gps: {
      latitude: 1.5496614931250685,
      longitude: 110.36381866919922,
    },
  };

  {
    /*Felső lista ikonjai*/
  }

  const categoryData = [
    {
      id: 1,
      name: "All",
      icon: icons.list,
    },
    {
      id: 2,
      name: "Vár",
      icon: icons.castle,
    },
    {
      id: 3,
      name: "Túra",
      icon: icons.hike,
    },
    {
      id: 4,
      name: "Tér",
      icon: icons.square,
    },
    {
      id: 5,
      name: "Sport",
      icon: icons.sport,
    },
    {
      id: 6,
      name: "Múzeum",
      icon: icons.museum,
    },
    {
      id: 7,
      name: "Kilátó",
      icon: icons.kilátó,
    },
    {
      id: 8,
      name: "Barlang",
      icon: icons.cave,
    },
    {
      id: 9,
      name: "Emlékmű",
      icon: icons.monument,
    },
    {
      id: 10,
      name: "Fürdő",
      icon: icons.bath,
    },
    {
      id: 11,
      name: "Rendezvény",
      icon: icons.rendezvény,
    },
  ];

  // price rating
  const free = 0;
  const affordable = 1;
  const fairPrice = 2;
  const expensive = 3;

  {
    /*Adatok*/
  }

  const Data = [
    {
      id: 1,
      name: "Budai Vár",
      rating: 8.1,
      categories: [1, 2],
      priceRating: affordable,
      photo: images.budai_var,
      location: {
        latitude: 1.5347282806345879,
        longitude: 110.35632207358996,
      },
      courier: {
        avatar: images.avatar_1,
        name: "Amy",
      },
    },
    {
      id: 2,
      name: "Hősök tere",
      rating: 7.8,
      categories: [1, 4],
      priceRating: free,
      photo: images.hosok_tere,
      location: {
        latitude: 1.556306570595712,
        longitude: 110.35504616746915,
      },
      courier: {
        avatar: images.avatar_2,
        name: "Jackson",
      },
    },
    {
      id: 3,
      name: "Természettudományi múzeum",
      rating: 5.7,
      categories: [1, 6],
      priceRating: fairPrice,
      photo: images.term_muzeum,
      location: {
        latitude: 1.5238753474714375,
        longitude: 110.34261833833622,
      },
      courier: {
        avatar: images.avatar_3,
        name: "James",
      },
    },
    {
      id: 4,
      name: "Erzsébet kilátó",
      rating: 8,
      categories: [1, 7],
      priceRating: free,
      photo: images.erzsebet_kilato,
      location: {
        latitude: 1.5578068150528928,
        longitude: 110.35482523764315,
      },
      courier: {
        avatar: images.avatar_4,
        name: "Ahmad",
      },
    },
    {
      id: 5,
      name: "Szabadság szobor",
      rating: 8.8,
      categories: [1, 9],
      priceRating: free,
      photo: images.szabadsag_szobor,
      location: {
        latitude: 1.558050496260768,
        longitude: 110.34743759630511,
      },
      courier: {
        avatar: images.avatar_4,
        name: "Muthu",
      },
    },
    {
      id: 6,
      name: "Gellért fürdő",
      rating: 7.9,
      categories: [1, 10],
      priceRating: fairPrice,
      photo: images.gellert_furdo,
      location: {
        latitude: 1.5573478487252896,
        longitude: 110.35568783282145,
      },
      courier: {
        avatar: images.avatar_1,
        name: "Jessie",
      },
    },
  ];

  const [categories, setCategories] = React.useState(categoryData);
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [latnivalok, setLatnivalok] = React.useState(Data);
  const [currentLocation, setCurrentLocation] = React.useState(
    initialCurrentLocation
  );

  function onSelectCategory(category) {
    let list = Data.filter((a) => a.categories.includes(category.id));

    setLatnivalok(list);

    setSelectedCategory(category);
  }

  function renderHeader() {
    return (
      <View style={{ flexDirection: "row", height: 50 }}>
        <TouchableOpacity
          style={{
            width: 50,
            paddingLeft: SIZES.padding * 2,
            justifyContent: "center",
          }}
          onPress={() => navigation.navigate("Login")}
        >
          <Image
            source={icons.back}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
            }}
          />
        </TouchableOpacity>

        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <View
            style={{
              width: "70%",
              height: "100%",
              backgroundColor: COLORS.Gray,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: SIZES.radius,
            }}
          >
            <Text style={{ ...FONTS.h3, color: COLORS.primary }}>TRIPO</Text>
          </View>
        </View>

        <TouchableOpacity
          style={{
            width: 50,
            paddingRight: SIZES.padding * 2,
            justifyContent: "center",
          }}
        >
          <Image
            source={icons.search}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  function renderMainCategories() {
    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity
          style={{
            padding: SIZES.padding,
            paddingBottom: SIZES.padding,
            backgroundColor:
              selectedCategory?.id == item.id ? COLORS.primary : COLORS.white,
            borderRadius: SIZES.radius,
            alignItems: "center",
            justifyContent: "center",
            marginRight: SIZES.padding,
            ...styles.shadow,
          }}
          onPress={() => onSelectCategory(item)}
        >
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor:
                selectedCategory?.id == item.id
                  ? COLORS.white
                  : COLORS.lightGray,
            }}
          >
            <Image
              source={item.icon}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
              }}
            />
          </View>
          <Text
            style={{
              //marginTop:SIZES.padding,
              marginBottom: 0,
              color:
                selectedCategory?.id == item.id ? COLORS.white : COLORS.black,
              ...FONTS.body5,
            }}
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      );
    };

    return (
      <View style={{ padding: SIZES.padding, paddingBottom: 0 }}>
        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => `${item.id}`}
          renderItem={renderItem}
          contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
        />
      </View>
    );
  }

  {
    /*Posztok*/
  }

  function renderFeedList() {
    const renderItem = ({ item }) => (
      <View style={{}}>
        <TouchableOpacity
          style={{ marginBottom: SIZES.padding * 2 }}
          onPress={() =>
            navigation.navigate("Map", {
              item,
              currentLocation,
            })
          }
        >
          <View
            style={{
              marginBottom: SIZES.padding,
            }}
          >
            <Image
              source={item.photo}
              resizeMode="cover"
              style={{
                width: "100%",
                height: 300,
                borderRadius: SIZES.radius,
              }}
            />

            {/*Felhasználó neve a poszton*/}

            <View
              style={{
                position: "absolute",
                top: 0,
                height: 20,
                width: SIZES.width * 0.4,
                backgroundColor: COLORS.white,
                borderTopLeftRadius: SIZES.radius,
                alignItems: "center",
                justifyContent: "center",
                ...styles.shadow,
              }}
            >
              <Text style={{ ...FONTS.h4 }}>{item.courier.name}</Text>
            </View>

            {/*Felhasználó képe a poszton*/}

            <View
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                height: 50,
                padding: 0,
                margin: 0,
                width: SIZES.width * 0.2,
                alignItems: "center",
                justifyContent: "center",
                ...styles.shadow,
              }}
            >
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Profile", {
                    item,
                    currentLocation,
                  })
                }
              >
                <Image
                  source={item.courier.avatar}
                  resizeMode="cover"
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 50,
                    padding: 0,
                    margin: 0,
                  }}
                />
              </TouchableOpacity>
            </View>

            {/*Esemény neve a poszton*/}

            <View
              style={{
                position: "absolute",
                bottom: 0,
                height: 50,
                width: SIZES.width * 0.5,
                backgroundColor: COLORS.white,
                borderTopRightRadius: SIZES.radius,
                borderBottomLeftRadius: SIZES.radius,
                alignItems: "center",
                justifyContent: "center",
                ...styles.shadow,
              }}
            >
              <Text style={{ ...FONTS.h4 }}>{item.name}</Text>
            </View>

            {/*Értékelés a poszton*/}

            <View
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                height: 50,
                width: SIZES.width * 0.2,
                backgroundColor: COLORS.white,
                borderTopLeftRadius: SIZES.radius,
                borderBottomRightRadius: SIZES.radius,
                alignItems: "center",
                justifyContent: "center",
                ...styles.shadow,
                flexDirection: "row",
              }}
            >
              <Image
                source={icons.star}
                style={{
                  height: 15,
                  width: 15,
                  tintColor: COLORS.secondary,
                  marginRight: 10,
                }}
              />
              <Text style={{ ...FONTS.h4 }}>{item.rating}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
    return (
      <FlatList
        data={latnivalok}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingHorizontal: SIZES.padding * 2,
          paddingBottom: 30,
        }}
      />
    );
  }

  {
    /*Ez a rész rendereli az egész képet*/
  }

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {renderMainCategories()}
      {renderFeedList()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
});

export default Feed;
