// This Context handles all CRUD operations that go through the Firestore
// and provides them to the rest of the app. The Provider gets applied in
// the src/index.js along with all the other Context Providers.

import React, { useState, createContext, useEffect } from 'react';
import * as firebase from 'firebase';
import 'firebase/firestore';
import firebaseConfig from 'config/firebase.config';

export const FirebaseContext = createContext();

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const FirebaseContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginIsInvalid, setLoginIsInvalid] = useState(false);
  const [loginIsLoading, setLoginIsLoading] = useState(false);

  // States to store the Firestore data entries in, one per view
  const [socialEntries, setSocialEntries] = useState([]);
  const [frontpagesEntries, setFrontpagesEntries] = useState([]);
  const [turbosEntries, setTurbosEntries] = useState([]);

  function logIn(email, password) {
    setLoginIsLoading(true);
    setLoginIsInvalid(false);

    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then((res) => {
            if (res.user) setIsLoggedIn(true);
            setLoginIsLoading(false);
          })
          .catch((e) => {
            setIsLoggedIn(false);
            setLoginIsInvalid(true);
            setLoginIsLoading(false);
          });
      });
  }

  function logOut() {
    firebase
      .auth()
      .signOut()
      .then(function() {
        setIsLoggedIn(false);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  // Check if the user is already authenticated with an active session
  function readSession() {
    const user = window.sessionStorage.getItem(
      `firebase:authUser:${firebaseConfig.apiKey}:[DEFAULT]`
    );
    if (user) setIsLoggedIn(true);
  }

  useEffect(() => {
    readSession();
  }, []);

  // We will now establish an active connection to the DB and sort the data entries into
  // their respective states.
  // We only need to do this once because of `onSnapshot` which establishes a websocket
  // for us and updates the data in real time, no more manual requests needed.
  useEffect(() => {
    if (isLoggedIn) {
      db.collection('links')
        .orderBy('timestamp')
        .onSnapshot((querySnapshot) => {
          let socialArray = [];
          let frontpagesArray = [];
          let turbosArray = [];

          querySnapshot.forEach((doc) => {
            if (doc.data().type === 'social')
              socialArray.push({ ...doc.data(), id: doc.id });
            if (doc.data().type === 'front')
              frontpagesArray.push({ ...doc.data(), id: doc.id });
            if (doc.data().type === 'turbo')
              turbosArray.push({ ...doc.data(), id: doc.id });
          });

          setSocialEntries(socialArray);
          setFrontpagesEntries(frontpagesArray);
          setTurbosEntries(turbosArray);
        });
    }
  }, [isLoggedIn]); // Trigger the function on log in

  const postEntry = ({
    type,
    list,
    title,
    url,
    topic,
    folder,
    isReady,
    isOnline,
    isPosted
  }) => {
    // We construct the object depending on whether all arguments are provided.
    // This is where we can define standard values in case of "undefined"- or "null"-values.
    const postObject = {
      type,
      list,
      title: title || 'No title',
      url: url || null,
      topic: topic || '',
      folder: folder || '',
      isReady,
      isOnline,
      isPosted
    };

    // We need to re-parse the Objext to make sure it's a pure Object.
    // Otherwise, the Firestore has trouble reading it.
    const parsedObject = JSON.parse(JSON.stringify(postObject));

    db.collection('links')
      .add({
        // We add the timestamp-property after parsing, because it's a serverside function
        // of Firestore and can therefore only be run and parsed on the server.
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        ...parsedObject
      })
      .catch((error) => console.log('Error: ' + error));
  };

  const setIsReady = (id, value) => {
    const docRef = db.collection('links').doc(id);

    docRef
      .update({
        isReady: value
      })
      .catch((error) => console.log('Error: ', error));
  };

  const setIsOnline = (id, value) => {
    const docRef = db.collection('links').doc(id);

    docRef
      .update({
        isOnline: value
      })
      .catch((error) => console.log('Error: ', error));
  };

  const setIsPosted = (id, value) => {
    const docRef = db.collection('links').doc(id);

    docRef
      .update({
        isPosted: value
      })
      .catch((error) => console.log('Error: ', error));
  };

  const deleteList = (list, mode) => {
    db.collection('links')
      .where('list', '==', list)
      .where('type', '==', mode)
      .get()
      .then((querySnapshot) => {
        // Firestore doesn't have a delete-function for several documents at once.
        // This work-around is batching the selection together and then works its
        // way through them with a `forEach` that deletes them one by one.
        let batch = db.batch();

        querySnapshot.forEach(function(doc) {
          batch.delete(doc.ref);
        });

        return batch.commit();
      });
  };

  const deleteEntry = (id) => {
    db.collection('links')
      .doc(id)
      .delete();
  };

  // The 'changes'-property needs to be an Object that only contains the
  // key/value-pairs that you want changed.
  const editTurbo = (id, changes) => {
    const docRef = db.collection('links').doc(id);

    docRef.update(changes).catch((error) => console.log('Error: ', error));
  };

  return (
    <FirebaseContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        loginIsInvalid,
        loginIsLoading,
        logOut,
        logIn,
        socialEntries,
        frontpagesEntries,
        turbosEntries,
        postEntry,
        setIsReady,
        setIsOnline,
        setIsPosted,
        deleteList,
        deleteEntry,
        editTurbo
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseContextProvider;
