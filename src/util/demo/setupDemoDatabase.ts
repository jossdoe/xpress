import { lists } from 'config/general.config';
import { LinkPostType } from 'types';

export const setupDemoDatabase = async (
  setIsLoadingDemo: (value: boolean) => void,
  db: any,
  firebase: any,
  addToast: any
) => {
  setIsLoadingDemo(true);
  await populateDBasync(db, firebase, addToast);
  addToast('Prepared Database for demo!', {
    appearance: 'success',
    autoDismiss: true
  });
  setIsLoadingDemo(false);
};

const populateDBasync = async (db: any, firebase: any, addToast: any) => {
  await db
    .collection('links')
    .get()
    .then((querySnapshot: any) => {
      // Firestore doesn't have a delete-function for several documents at once.
      // This work-around is batching the selection together and then works its
      // way through them with a `forEach` that deletes them one by one.
      let batch = db.batch();
      querySnapshot.forEach(function (doc: any) {
        batch.delete(doc.ref);
      });
      return batch.commit();
    })
    .then(async () => {
      // POPULATE DB
      lists.forEach(async (list) => {
        // Turbos
        [1, 2, 3].forEach(async () => {
          await postEntryAsync(
            {
              type: 'turbo',
              list: list.title,
              title: 'This is an article',
              url: 'https://www.google.com',
              topic: 'Topic',
              folder: 'path/to/folder',
              isReady: true,
              isOnline: false,
              isPosted: false
            },
            db,
            firebase,
            addToast
          );
        });

        // Frontpages
        [1, 2, 3].forEach(async () => {
          await postEntryAsync(
            {
              type: 'front',
              list: list.title,
              title: 'This is an article',
              url: 'https://www.google.com',
              topic: 'Topic',
              folder: 'path/to/folder',
              isReady: true,
              isOnline: false,
              isPosted: false
            },
            db,
            firebase,
            addToast
          );
        });

        // Social
        [1, 2, 3].forEach(async () => {
          await postEntryAsync(
            {
              type: 'social',
              list: list.title,
              title: 'This is an article',
              url: 'https://www.google.com',
              topic: 'Topic',
              folder: 'path/to/folder',
              isReady: true,
              isOnline: false,
              isPosted: false
            },
            db,
            firebase,
            addToast
          );
        });
      });
    })
    .catch((error: any) =>
      addToast('Error: ' + error, {
        appearance: 'error',
        autoDismiss: false
      })
    );
};

const postEntryAsync = async (
  {
    type,
    list,
    title,
    url,
    topic,
    folder,
    isReady,
    isOnline,
    isPosted
  }: LinkPostType,
  db: any,
  firebase: any,
  addToast: any
) => {
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

  await db
    .collection('links')
    .add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      ...parsedObject
    })
    .catch((error: any) =>
      addToast('Error: ' + error, {
        appearance: 'error',
        autoDismiss: false
      })
    );
};
