import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCpptbOvZgn_RxLS7msHJtF_EE7O2_zrDY",
  authDomain: "tripo-185bd.firebaseapp.com",
  databaseURL:
    "https://tripo-185bd-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tripo-185bd",
  storageBucket: "tripo-185bd.appspot.com",
  messagingSenderId: "850391659182",
  appId: "1:850391659182:web:2697b129b1c0344162733f",
  measurementId: "G-KK61KPLLK4",
};

firebase.initializeApp(config);

export const f = firebase;
export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
