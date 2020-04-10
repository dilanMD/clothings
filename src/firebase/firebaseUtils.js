import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCjKg6kc0I25hNsdnZe7vosBc6SGaVkeZs",
    authDomain: "clothings-db90f.firebaseapp.com",
    databaseURL: "https://clothings-db90f.firebaseio.com",
    projectId: "clothings-db90f",
    storageBucket: "clothings-db90f.appspot.com",
    messagingSenderId: "976911186381",
    appId: "1:976911186381:web:f38f0afbfe9e9c8582ac84",
    measurementId: "G-L63RSQQ5FY"
}

export const createUserDocument = async (userAuth, additionalData) => {
    if (!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()

    if (!snapShot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log("Error while creating user document", error.message)
        }
    }

    return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase