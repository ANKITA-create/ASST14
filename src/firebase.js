import firebase from "firebase";
import 'firebase/storage';
  var firebaseConfig = {
    apiKey: "AIzaSyBUqDv2Ra1YiBMD-EkZ628dPE12Tn6udmY",
    authDomain: "asst-d1405.firebaseapp.com",
    databaseURL: "https://asst-d1405-default-rtdb.firebaseio.com",
    projectId: "asst-d1405",
    storageBucket: "asst-d1405.appspot.com",
    messagingSenderId: "163425226943",
    appId: "1:163425226943:web:65ec30aadb5d80de12b60a",
    // measurementId: "G-0LXX08W6E4"
  };
  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);
  // const db = firebase.database();
  // firebase.analytics();
export default fireDb.database();
export const Db = firebase.firestore();
// export const Db = fireDb.database().ref();
export const auth = firebase.auth();
export const storage = firebase.storage();

export const messaging = firebase.messaging();

export const createUserDocument = async (user, additionalData) => {
  if (!user) return;

  const userRef = Db.doc(`users/${user.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { email } = user;
    const { name,flatid, phone } = additionalData;


    try {
      await userRef.set({
        name,
        flatid,
        phone,
        email,
      });
    } catch (error) {
      console.log('Error in creating user', error);
    }
  }
};

