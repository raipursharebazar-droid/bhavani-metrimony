// Replace these values with your own Firebase project config.
// Get them from: Firebase Console → Project Settings → General → Your apps → SDK setup and configuration
const firebaseConfig = {
  apiKey: "AIzaSyBedLamfObj8uQuijsbro3oDod37p8Y_l8",
  authDomain: "bhavani-metrimony.firebaseapp.com",
  projectId: "bhavani-metrimony",
  storageBucket: "bhavani-metrimony.firebasestorage.app",
  messagingSenderId: "52337146161",
  appId: "1:52337146161:web:cf9d07a516c1a1444e1810"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
