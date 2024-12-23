
let db;
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const form = document.querySelector("form");

window.onload = () => {

    let request = window.indexedDB.open("contacts", 1);

    request.onerror = () => {
        console.log("Database Faild To Open");

    }
    request.onsuccess = () => {
        console.log("Database Opened Successfully");

    }
    db = request.result;
}