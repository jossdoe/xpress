import React, { useState, createContext, useEffect } from 'react';
import * as firebase from 'firebase';
import 'firebase/firestore';
import firebaseConfig from 'config/firebase.config';

export const FirebaseContext = createContext();

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const FirebaseContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [socialEntries, setSocialEntries] = useState([]);
  const [frontpagesEntries, setFrontpagesEntries] = useState([]);
  const [turbosEntries, setTurbosEntries] = useState([]);
  const [loginIsInvalid, setLoginIsInvalid] = useState(false);
  const [loginIsLoading, setLoginIsLoading] = useState(false);

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

  function readSession() {
    const user = window.sessionStorage.getItem(
      `firebase:authUser:${firebaseConfig.apiKey}:[DEFAULT]`
    );
    if (user) setIsLoggedIn(true);
  }

  useEffect(() => {
    readSession();
  }, []);

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
  }, [isLoggedIn]);

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

    const parsedObject = JSON.parse(JSON.stringify(postObject));

    db.collection('links')
      .add({
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
