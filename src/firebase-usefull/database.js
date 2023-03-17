import { getDatabase, ref, set, onValue, update } from "firebase/database";

const databaseService = {
    writeData(url, data) {
        const db = getDatabase();
        set(ref(db, url), data);
    },
    readData(url, callback) {
        const db = getDatabase();
        const itemRef = ref(db, url);
        onValue(itemRef, (snapshot) => {
            console.log("data changed !", snapshot.val());
            const data = snapshot.val();
            callback(data);
        });
    },
    updateData(dbNode, data) {
        const db = getDatabase();
        return new Promise(resolve => {
            const updates = {};
            for(const key in data) {
                updates[dbNode + "/" + key] = data[key];
            }
            update(ref(db), updates)
            .then(success => {
                resolve({data: success});
            }).catch(error => {
                console.log(error);
                resolve({error});
            })
        });
    }
};

export default databaseService;