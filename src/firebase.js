import { getDefaultNormalizer } from '@testing-library/react';
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCrr7rdb31KCYSE-xbEner5KMv54etz1Z4',
  authDomain: 'where-is-waldo-119d6.firebaseapp.com',
  databaseURL: 'https://where-is-waldo-119d6.firebaseio.com',
  projectId: 'where-is-waldo-119d6',
  storageBucket: 'where-is-waldo-119d6.appspot.com',
  messagingSenderId: '1041281596752',
  appId: '1:1041281596752:web:eaf58bbaffb7cbce510055',
  measurementId: 'G-Y5SJ8CSX1L',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
