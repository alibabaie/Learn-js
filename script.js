let db;
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const from = document.querySelector("form");

window.onload = () => {
    let request = window.indexedDB.open("contacts", 1);

    request.onerror = () => {
        console.log("Database Failed To Open");
    }


    request.onsuccess = () => {
        console.log("Database Opened Successfully");
        db = request.result;
        console.log(db);
    }


    request.onupgradeneeded = (e) => {
        let db = e.target.result;
        console.log(db);

        let objectStore = db.createObjectStore('contacts', {
            keyPath: 'id',
            autoIncrement: true
        });


        objectStore.createIndex('firstName', {
            unique: false
        });

        objectStore.createIndex('lastName', {
            unique: false
        });


        console.log("Database Setup Successfully...");

    }








}