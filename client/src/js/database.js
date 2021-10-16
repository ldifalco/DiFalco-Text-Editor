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

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => { console.log('putDb implemented'); 

//create connection to database and which version we want to use
const jateDb = await openDB('jate', 1);

//Create a new transaction and specify database and data privileges.
const tx = contactDb.transaction('jate', 'readwrite');

//Open desired object store
const store = tx.objectStore('jate');

//,add() method passes in content
const request = store.add({ jest: content });

//Request confirmation
const result = await request;
console.log('data saved to DB', result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {

  console.error('getDb not implemented');
  console.log('get all content from Db');

  //create connection to database and which version we want to use
const jateDb = await openDB('jate', 1);

//Create a new transaction and specify database and data privileges.
const tx = contactDb.transaction('jate', 'readwrite');

//Open desired object store
const store = tx.objectStore('jate');

//.getAll() method grabs all data from db
const request = store.getAll();

//request confirmation
const result = await request;
console.log('result.value', result);
return result;

};

initdb();
