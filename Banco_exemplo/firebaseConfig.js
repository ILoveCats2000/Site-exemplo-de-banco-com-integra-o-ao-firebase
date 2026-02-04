import {initializeApp} from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import {getAuth} from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCykWPFCbX8Bb4v6Lr5eMkHWoMDe-soJBU",
    authDomain: "bancoexemplo-eb7be.firebaseapp.com",
    projectId: "bancoexemplo-eb7be",
    storageBucket: "bancoexemplo-eb7be.firebasestorage.app",
    messagingSenderId: "56483196251",
    appId: "1:56483196251:web:1e7ac338fa5576e6457e7e",
    measurementId: "G-W5R4QSM63D"
};

        // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app, auth};