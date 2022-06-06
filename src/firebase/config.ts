import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-p-fjXusGY_oU-qIStJZ9krTeoxa5Xso",
  authDomain: "devices-fire-base.firebaseapp.com",
  databaseURL:
    "https://devices-fire-base-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "devices-fire-base",
  storageBucket: "devices-fire-base.appspot.com",
  messagingSenderId: "766156419212",
  appId: "1:766156419212:web:cc993e320c86e7349ccba9",
  measurementId: "G-NP1SDQQHJB",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export type AppFirebase = typeof app;
export type DbType = typeof db;

export { app, analytics, db };
