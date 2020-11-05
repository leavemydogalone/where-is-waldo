import { computeHeadingLevel } from '@testing-library/react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

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

// console.log(storageRef);
// console.log(peopleRef);
export const getMap = (callback, map) => {
  const storage = firebase.storage();
  const storageRef = storage.ref(map);
  storageRef
    .getDownloadURL()
    .then((url) => {
      callback(url);
    })
    .catch(function (error) {
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case 'storage/object-not-found':
          // File doesn't exist
          break;

        case 'storage/unauthorized':
          // User doesn't have permission to access the object
          break;

        case 'storage/canceled':
          // User canceled the upload
          break;

        case 'storage/unknown':
          // Unknown error occurred, inspect the server response
          break;
      }
    });
};

export const getPeople = (callback, map) => {
  const peopleRef = firebase.firestore().collection('maps').doc(map);
  peopleRef
    .get()
    .then(function (doc) {
      if (doc.exists) {
        console.log('Document data:', doc.data());
        callback(doc.data());
      } else {
        // doc.data() will be undefined in this case
        console.log('No such document!');
      }
    })
    .catch(function (error) {
      console.log('Error getting document:', error);
    });
};

// peopleRef.onSnapshot((querySnapShot) => {
//   const items = [];
//   querySnapShot.forEach((doc) => {
//     items.push(doc.data());
//   });
//   callback(items);
//
