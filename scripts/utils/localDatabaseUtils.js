let db = null;

const SCHEMA = "Github_Categorizing_DB";
const TABLE = "category";

const getObjectStore = (store_name, mode) => {
    return db.transaction(store_name, mode).objectStore(store_name);
}

export const localDatabaseUtils = {


    create_database : () => {
        console.log("[localDatabaseUtils] [create_database] called");
        // DB 생성
        let req = indexedDB.open(SCHEMA);

        // DB 생성 성공
        req.onsuccess = function (evt) {
            db = this.result;
        };
        // DB 생성 오류
        req.onerror = function (evt) {
            console.error("indexedDB : ", evt.target.errorCode);
        };
        // DB 마그레이션
        req.onupgradeneeded = function (evt) {
            console.log("indexedDB.onupgradeneeded");
            var store = evt.currentTarget.result.createObjectStore(TABLE,
                { keyPath: 'id', autoIncrement: true });

            store.createIndex('NewRepo', 'NewRepo', { unique: false });
            store.createIndex('OldRepo', 'OldRepo', { unique: false });
        };
    },

    insert_newRepo : (listRepo) => {
        console.log("[localDatabaseUtils] [insert_records] called");
        if (!db) {
            return;
        }

        let store = getObjectStore(TABLE, 'readwrite');
        let req

        store.clear();

       // for (let i in listRepo){
        //    console.log(listRepo[i]);
            req = store.add({key : "newRepo", value : listRepo})

            req.onerror = function () {
                console.error(this.error);
            };
        //}

    },

    getRepoList : () => {
        console.log("[localDatabaseUtils] [getRepoList] called");

        if (!db) {
            return;
        }

        let store = getObjectStore(TABLE, 'readonly');
        let req = store.openCursor();
        req.onsuccess = function (evt) {
            const cursor = evt.target.result;
            if (cursor) {
                req = store.get(cursor.key);
                req.onsuccess = function (evt) {
                    const value = evt.target.result;
                    console.log(value);
                }
                cursor.continue();
            }
        }
    },

    get_record : email => {
        console.log("[localDatabaseUtils] [get_record] called");
        if (db) {
            const get_transaction = db.transaction(TABLE, "readonly");
            const objectStore = get_transaction.objectStore(TABLE);

            return new Promise((resolve, reject) => {
                get_transaction.oncomplete = function () {
                    console.log("ALL GET TRANSACTIONS COMPLETE.");
                }

                get_transaction.onerror = function () {
                    console.log("PROBLEM GETTING RECORDS.")
                }

                let request = objectStore.get(email);

                request.onsuccess = function (event) {
                    resolve(event.target.result);
                }
            });
        }
    },


    update_record : record => {
        console.log("[localDatabaseUtils] [update_record] called");
        if (db) {
            const put_transaction = db.transaction(TABLE, "readwrite");
            const objectStore = put_transaction.objectStore(TABLE);

            return new Promise((resolve, reject) => {
                put_transaction.oncomplete = function () {
                    console.log("ALL PUT TRANSACTIONS COMPLETE.");
                    resolve(true);
                }

                put_transaction.onerror = function () {
                    console.log("PROBLEM UPDATING RECORDS.")
                    resolve(false);
                }

                objectStore.put(record);
            });
        }
    },

    delete_record : email => {
        console.log("[localDatabaseUtils] [delete_record] called");
        if (db) {
            const delete_transaction = db.transaction("category",
                "readwrite");
            const objectStore = delete_transaction.objectStore("category");

            return new Promise((resolve, reject) => {
                delete_transaction.oncomplete = function () {
                    console.log("ALL DELETE TRANSACTIONS COMPLETE.");
                    resolve(true);
                }

                delete_transaction.onerror = function () {
                    console.log("PROBLEM DELETE RECORDS.")
                    resolve(false);
                }

                objectStore.delete(email);
            });
        }
    }
}










