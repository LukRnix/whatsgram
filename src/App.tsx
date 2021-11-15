import type { Component } from "solid-js";

import logo from "./logo.svg";
import styles from "./App.module.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxpcqNhankArn3k-QkrEEA1dtjv6Fg2KI",
  authDomain: "whatsgram-105c9.firebaseapp.com",
  projectId: "whatsgram-105c9",
  storageBucket: "whatsgram-105c9.appspot.com",
  messagingSenderId: "1007817643967",
  appId: "1:1007817643967:web:73007e0d0a2002030fb30a",
  measurementId: "G-K947QK18WE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
    </div>
  );
};

export default App;
