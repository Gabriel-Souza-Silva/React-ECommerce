import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyDHeKCQM1sTG8ckKVvY5RYp4SJEFxXmreo",
    authDomain: "react-ecommerce-61439.firebaseapp.com",
    databaseURL: "https://react-ecommerce-61439.firebaseio.com",
    projectId: "react-ecommerce-61439",
    storageBucket: "react-ecommerce-61439.appspot.com",
    messagingSenderId: "459829730544",
    appId: "1:459829730544:web:47497ba998ddb5cd2f3635",
    measurementId: "G-D56YMLMEYX"
};


export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
     
    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if(!snapShot.exists)
    {
        const {displayName, email} = userAuth;

        const createdAt = new Date();

        try 
        {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })

            console.log('User criado com sucesso')
        } catch (error) {
            console.log('error creating user', error)
        }
    }

    return userRef;
}

firebase.initializeApp(config)


export const auth = firebase.auth();
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;

