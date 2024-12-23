let db;
const firstNameInput = document.querySelector("#firstName");
const lastNameInput = document.querySelector("#lastName");
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


        objectStore.createIndex('firstName', 'firstName', {
            unique: false
        });

        objectStore.createIndex('lastName', 'lastName', {
            unique: false
        });


        console.log("Database Setup Successfully...");

    }


}





const addData = (e) => {
    e.preventDefault();

    let newItem = {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value
    };

    let transaction = db.transaction(['contacts'], 'readwrite').objectStore('contacts').add(newItem);


    transaction.onsuccess = () => {
        firstNameInput.value = "";
        lastNameInput.value = "";
    }

    transaction.oncomplete = () => {
        console.log("transaction Completed On Database");
    }


    transaction.onerror = () => {
        console.log("Error Transaction On Database");
    }



}


from.addEventListener('submit', addData);


