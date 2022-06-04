import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD4UDyd0JiK2vbJzTYAgYOMnvXsFexnpkI",
    authDomain: "rich-app-auth.firebaseapp.com",
    projectId: "rich-app-auth",
    storageBucket: "rich-app-auth.appspot.com",
    messagingSenderId: "1028657388378",
    appId: "1:1028657388378:web:118d7a4f99a78bf5cbf163"
};

firebase.initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')
