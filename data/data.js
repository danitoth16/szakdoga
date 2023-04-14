// const countiesData = [
//   {
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
//         name: "Halászbástya",
//         description:
//           "A Halászbástya Budapest egyik legismertebb látnivalója, amely az Óbuda szomszédságában található Budai Vár történelmi negyedében. Az épületet a 19. század végén építették, és azóta is egyik legismertebb turistalátványosság Budapesten.",
//         //image: require("./images/halaszbastya.jpg"),
//         latitude: 47.5022,
//         longitude: 19.0345,
//       },
//       {
//         name: "Gellért-hegy",
//         description:
//           "A Gellért-hegy Budapest egyik legismertebb látnivalója, amely Budapest XI. kerületében található. A Gellért-hegy a Dunára néző oldalán helyezkedik el, és fantasztikus kilátást nyújt a városra és a Dunára.",
//         //image: require("./images/gellert-hegy.jpg"),
//         latitude: 47.4813,
//         longitude: 19.0406,
//       },
//       {
//         name: "Parlament",
//         description:
//           "A Parlament Budapest egyik legjelentősebb épülete, amely a város egyik legismertebb látnivalója. Az épületet a 19. század végén építették, és a mai napig a magyar törvényhozás helyszíne.",
//         //image: require("./images/parliament.jpg"),
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
//   {
//     name: "Bács-Kiskun",
//     sights: ["Kecskemét City Hall", "Bugac Puszta", "Kiskunság National Park"],
//   },
//   {
//     name: "Békés",
//     sights: ["Gyulai Castle", "Békéscsaba Zoo", "Körös-Maros National Park"],
//   },
//   {
//     name: "Borsod-Abaúj-Zemplén",
//     sights: ["Miskolc Zoo", "Eger Castle", "Tokaj Wine Region"],
//   },
//   {
//     name: "Csongrád-Csanád",
//     sights: [
//       "Szeged Cathedral",
//       "Hódmezővásárhely Art Museum",
//       "Ópusztaszer National Memorial Park",
//     ],
//   },
//   {
//     name: "Fejér",
//     sights: [
//       "Székesfehérvár Castle",
//       "Velence Lake",
//       "Gárdonyi Géza Memorial House",
//     ],
//   },
//   {
//     name: "Győr-Moson-Sopron",
//     sights: ["Győr Cathedral", "Fertőrákos Quarry", "Sopron Old Town"],
//   },
//   {
//     name: "Hajdú-Bihar",
//     sights: ["Debrecen Zoo", "Hortobágy National Park", "Nyíregyháza Zoo"],
//   },
//   {
//     name: "Heves",
//     sights: [
//       "Lillafüred Hanging Garden",
//       "Egerszalók Thermal Bath",
//       "Bükk National Park",
//     ],
//   },
//   {
//     name: "Jász-Nagykun-Szolnok",
//     sights: [
//       "Tisza Lake",
//       "Kunszentmárton Botanic Garden",
//       "Tiszafüred Ecocentre",
//     ],
//   },
//   {
//     name: "Komárom-Esztergom",
//     sights: ["Esztalosbánya Cave", "Komárom Fortress", "Bazilika Esztergom"],
//   },
//   {
//     name: "Nógrád",
//     sights: ["Salgó Castle", "Mátraszentimre Ski Resort", "Buják Horse Farm"],
//   },
//   {
//     name: "Pest",
//     sights: [
//       "Aquaworld Water Park",
//       "Szentendre Open-Air Museum",
//       "Lupa Island",
//     ],
//   },
// ];

// export { countiesData };

const data = [
  {
    megye: "Bács-Kiskun",
    lat: 46.59144326210236,
    lng: 19.313482471682825,
    latlng: "46.5914,19.3135",
    latlngZoom: 9,
    latlngCenter: [46.5914, 19.3135],
    sights: [
      {
        name: "Kiskunsági Nemzeti Park",
        lat: 46.55695955802385,
        lng: 19.18250549911424,
      },
      {
        name: "Bócsa kastély",
        lat: 46.410174,
        lng: 19.387308,
      },
      {
        name: "Kiskunmajsai Arborétum",
        lat: 46.641367,
        lng: 19.680235,
      },
    ],
  },
  {
    megye: "Baranya",
    lat: 45.99659931239854,
    lng: 18.291121376573865,
    latlng: "45.9966,18.2911",
    latlngZoom: 9,
    latlngCenter: [45.9966, 18.2911],
    sights: [
      {
        neve: "Pécs óvárosa",
        lat: 46.0737,
        lng: 18.2272,
      },
      {
        neve: "Zsolnay Kulturális Negyed",
        lat: 46.060688,
        lng: 18.214127,
      },
      {
        neve: "Abaligeti-barlang",
        lat: 46.5642,
        lng: 18.4434,
      },
    ],
  },
  {
    megye: "Békés",
    lat: 46.79731041831868,
    lng: 21.114114166272656,
    latlng: "46.7973,21.1141",
    latlngZoom: 9,
    latlngCenter: [46.7973, 21.1141],
    sights: [
      {
        name: "Körös-Maros Nemzeti Park",
        lat: 46.6978,
        lng: 20.8751,
      },
      {
        name: "Békéscsaba Városi Sportuszoda és Élményfürdő",
        lat: 46.6803,
        lng: 21.0797,
      },
      {
        name: "Békéscsaba Jókai Színház",
        lat: 46.6769,
        lng: 21.1303,
      },
    ],
  },
  // további megyék és látványosságok
];

export default data;
