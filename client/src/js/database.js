import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// add some content to db
  export const putDb = async (content) => console.error('putDb not implemented');

// get all the content from the database
export const getDb = async () =>  {
  console.log('GET from the database');

  // connect to the database and specify version
  const contactDb = await openDB('contact', 1);

  // new transaction and specify database and privileges.
  const tx = contactDb.transaction('contact', 'readonly');

  // open obj store
  const store = tx.objectStore('contact');

  // get all data in the db
  const request = store.getAll();

  // confirm req
  const result = await request;
  console.log('result.value', result);
  return result;
}; console.error('getDb not implemented');

initdb();
