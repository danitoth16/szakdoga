import { COLORS, icons, images, SIZES, FONTS } from "../constans";

function FeedData() {
  const Data = [
    {
      id: 1,
      name: "Budai Vár",
      rating: 8.1,
      categories: [1, 2],
      priceRating: "affordable",
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
      priceRating: "free",
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
      priceRating: "fairPrice",
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
      priceRating: "free",
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
      priceRating: "free",
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
      priceRating: "fairPrice",
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
    {
      id: 7,
      name: "Gellért fürdő",
      rating: 7.9,
      categories: [1, 10],
      priceRating: "fairPrice",
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
    {
      id: 8,
      name: "Gellért fürdő",
      rating: 7.9,
      categories: [1, 10],
      priceRating: "fairPrice",
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
    {
      id: 9,
      name: "Gellért fürdő",
      rating: 7.9,
      categories: [1, 10],
      priceRating: "fairPrice",
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
}

export default FeedData;
