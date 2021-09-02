import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore';
import { db } from '../../firebase'


export const getDb = () => {
    db.collection("maps").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(doc.data());
        });
    });

}
export const addDb = () => {
    db.collection("maps").add({
        name:'tal'
    })

}
export const deleteDb = (id) => {
    db.collection("maps").doc(id).delete();

}
