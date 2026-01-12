// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  // --- PLAK HIER JOUW CONFIGURATIE VAN GOOGLE ---
   apiKey: "AIzaSyDMkVFEDMqivF7i8i5Vrm665e1TKx4Y68E",
  authDomain: "schoolwachtrij.firebaseapp.com",
  projectId: "schoolwachtrij",
  storageBucket: "schoolwachtrij.firebasestorage.app",
  messagingSenderId: "468041472185",
  appId: "1:468041472185:web:13a42afe197880a748a368"
  // ----------------------------------------------
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
