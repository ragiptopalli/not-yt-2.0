import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDp_BbPQg8mU4zjwI-21mIU0hX3Yu-n9g4",
  authDomain: "not-yt-really-2.firebaseapp.com",
  projectId: "not-yt-really-2",
  storageBucket: "not-yt-really-2.appspot.com",
  messagingSenderId: "601576686672",
  appId: "1:601576686672:web:0d0259a3044ea060993d55",
};

firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl");

export const signInWithGoogle = async () =>
  await auth.signInWithPopup(provider);

export const auth = firebase.auth();
