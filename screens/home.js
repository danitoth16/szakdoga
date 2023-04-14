import React, { Component } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const counties = [
  //{
  //     name: "Budapest",
  //     sights: [
  //       {
  //         name: "Lánchíd",
  //         description:
  //           "A Lánchíd Budapest egyik legismertebb és leglátogatottabb építménye.",
  //         coordinates: {
  //           latitude: 47.500793,
  //           longitude: 19.045211,
  //         },
  //         image:
  //           "https://hu.wikipedia.org/wiki/L%C3%A1nch%C3%ADd#/media/F%C3%A1jl:Budapest_L%C3%A1nch%C3%ADd_P1000857.jpg",
  //       },
  //       {
  //         name: "Hősök tere",
  //         description:
  //           "Az egyik legjelentősebb közterek közé tartozik, ahol számos emlékmű és szobor található.",
  //         coordinates: {
  //           latitude: 47.514054,
  //           longitude: 19.077731,
  //         },
  //         image:
  //           "https://hu.wikipedia.org/wiki/H%C5%91s%C3%B6ktere#/media/F%C3%A1jl:Hosok_Tere.jpg",
  //       },
  //       {
  //         name: "Halászbástya",
  //         description:
  //           "A Halászbástya Budapest egyik legismertebb és leglátogatottabb építménye.",
  //         coordinates: {
  //           latitude: 47.502302,
  //           longitude: 19.034685,
  //         },
  //         image:
  //           "https://hu.wikipedia.org/wiki/Hal%C3%A1szb%C3%A1stya#/media/F%C3%A1jl:Fisherman%27s_Bastion_in_Budapest.jpg",
  //       },
  //       {
  //         name: "Gellért-hegy",
  //         description:
  //           "A Gellért-hegy Budapest egyik legismertebb látnivalója, amely Budapest XI. kerületében található. A Gellért-hegy a Dunára néző oldalán helyezkedik el, és fantasztikus kilátást nyújt a városra és a Dunára.",
  //         latitude: 47.4813,
  //         longitude: 19.0406,
  //       },
  //       {
  //         name: "Parlament",
  //         description:
  //           "A Parlament Budapest egyik legjelentősebb épülete, amely a város egyik legismertebb látnivalója. Az épületet a 19. század végén építették, és a mai napig a magyar törvényhozás helyszíne.",
  //         latitude: 47.5079,
  //         longitude: 19.0451,
  //       },
  //     ],
  //   },
  //   {
  //     name: "Baranya",
  //     sights: [
  //       {
  //         name: "Harkányi Gyógyfürdő",
  //         description:
  //           "Harkány híres gyógyfürdőiről, melyeket már a rómaiak is használtak. A víz gazdag ásványi anyagokban és gyógyító hatású.",
  //         latitude: 45.86,
  //         longitude: 18.24361,
  //         image: {
  //           uri: "https://www.google.com/maps/about/behind-the-scenes/streetview/treks/europe/hungary/harkany/img/harkany.jpg",
  //         },
  //       },
  //       {
  //         name: "Pécsi Székesegyház",
  //         description:
  //           "A Pécsi Székesegyház egy gyönyörű példája a magyar gótikus építészetnek, és Magyarország ötödik legnagyobb temploma. Az épület építése az 1200-as évek végén kezdődött, és az évszázadok során különböző stílusokat kombináltak benne.",
  //         latitude: 46.076652,
  //         longitude: 18.227046,
  //         image: {
  //           uri: "https://www.google.com/maps/about/behind-the-scenes/streetview/treks/europe/hungary/pecs-cathedral/img/pecs-cathedral.jpg",
  //         },
  //       },
  //       {
  //         name: "Orfűi Tó",
  //         description:
  //           "Az Orfűi Tó egy gyönyörű tó és rekreációs terület, amely a Mecsek-hegység lábánál található. A tó kristálytiszta vizével, strandjával és sétányával ideális hely a pihenésre és a kikapcsolódásra.",
  //         latitude: 46.40766,
  //         longitude: 18.248139,
  //         image: {
  //           uri: "https://www.google.com/maps/about/behind-the-scenes/streetview/treks/europe/hungary/orfu-lake/img/orfu-lake.jpg",
  //         },
  //       },
  //     ],
  //   },
  {
    name: "Budapest",
    sights: [
      "Lánchíd",
      "Hősök tere",
      "Halászbástya",
      "Gellért-hegy",
      "Parlament",
    ],
  },
  {
    name: "Baranya",
    sights: ["Harkányi Gyógyfürdő", "Bugac Puszta", "Kiskunság National Park"],
  },
  {
    name: "Bács-Kiskun",
    sights: ["Kecskemét City Hall", "Pécsi Székesegyház", "Orfűi Tó"],
  },
  {
    name: "Békés",
    sights: ["Gyulai Castle", "Békéscsaba Zoo", "Körös-Maros National Park"],
  },
  {
    name: "Borsod-Abaúj-Zemplén",
    sights: ["Miskolc Zoo", "Eger Castle", "Tokaj Wine Region"],
  },
  {
    name: "Csongrád-Csanád",
    sights: [
      "Szeged Cathedral",
      "Hódmezővásárhely Art Museum",
      "Ópusztaszer National Memorial Park",
    ],
  },
  {
    name: "Fejér",
    sights: ["Székesfehérvár kastély", "Velencei Tó", "Gárdonyi Géza Emlékház"],
  },
  {
    name: "Győr-Moson-Sopron",
    sights: ["Győr Katedrális", "Fertőrákos Quarry", "Sopron Old Town"],
  },
  {
    name: "Hajdú-Bihar",
    sights: [
      "Debrecen Állatkert",
      "Hortobágy Nemzeti Park",
      "Nyíregyháza Állatkert",
    ],
  },
  {
    name: "Heves",
    sights: [
      "Lillafüred Hanging Garden",
      "Egerszalók Gyógyfürdő ",
      "Bükk Nemzeti Park ",
    ],
  },
  {
    name: "Jász-Nagykun-Szolnok",
    sights: ["Tisza tó", "Kunszentmárton Botanic kert", "Tiszafüred Ecocentre"],
  },
  {
    name: "Komárom-Esztergom",
    sights: ["Esztalosbánya barlang", "Komárom erőd", "Esztergomi Bazilika"],
  },
  {
    name: "Nógrád",
    sights: ["Salgó Castle", "Mátraszentimre Ski Resort", "Buják Horse Farm"],
  },
  {
    name: "Pest",
    sights: [
      "Aquaworld Water Park",
      "Szentendre Open-Air Museum",
      "Lupa Island",
    ],
  },
  {
    name: "Somogy",
    sights: ["Gyulai Castle", "Békéscsaba Zoo", "Körös-Maros National Park"],
  },
  {
    name: "Szabolcs-Szatmár-Bereg",
    sights: ["Gyulai Castle", "Békéscsaba Zoo", "Körös-Maros National Park"],
  },
  {
    name: "Tolna",
    sights: ["Gyulai Castle", "Békéscsaba Zoo", "Körös-Maros National Park"],
  },
  {
    name: "Vas",
    sights: ["Gyulai Castle", "Békéscsaba Zoo", "Körös-Maros National Park"],
  },
  {
    name: "Veszprém",
    sights: ["Gyulai Castle", "Békéscsaba Zoo", "Körös-Maros National Park"],
  },
  {
    name: "Zala",
    sights: ["Gyulai Castle", "Békéscsaba Zoo", "Körös-Maros National Park"],
  },
];

const itemSize = 100;
const spacing = 10;

class Home extends Component {
  handlePress = (county) => {
    this.props.navigation.navigate("Sights", { sights: county.sights });
  };

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.countyBox}
        onPress={() => this.handlePress(item)}
      >
        <Text style={styles.countyName}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  keyExtractor = (item) => item.name;

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={counties}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          numColumns={3}
        />
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  countyBox: {
    width: itemSize,
    height: itemSize,
    borderRadius: 10,
    backgroundColor: "#5cb85c",
    margin: spacing,
    justifyContent: "center",
    alignItems: "center",
  },
  countyName: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
