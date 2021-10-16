import * as firebase from 'firebase/app'
import { GithubAuthProvider, signInWithPopup, getAuth } from 'firebase/auth'
import {
  getFirestore,
  collection,
  addDoc,
  Timestamp,
  onSnapshot,
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyA8HjdxB7zeNvJChgeX3EODgmclLwzp0T8',
  authDomain: 'devter-332f5.firebaseapp.com',
  projectId: 'devter-332f5',
  storageBucket: 'devter-332f5.appspot.com',
  messagingSenderId: '58389340096',
  appId: '1:58389340096:web:f803989bccbf71594c7225',
  measurementId: 'G-C30H0E9Y97',
}

firebase.initializeApp(firebaseConfig)

export const db = getFirestore()

const formatUserFromFirebasetoUser = (res) => {
  const { email, photoURL, uid } = res
  return {
    email,
    avatar: photoURL,
    userId: uid,
  }
}

export const changeAuthStat = (onChange) => {
  const auth = getAuth()
  return auth.onAuthStateChanged((user) => {
    const normalizeUser = user ? formatUserFromFirebasetoUser(user) : null
    onChange(normalizeUser)
  })
}

export const loginWithGithub = () => {
  const githubProvider = new GithubAuthProvider()
  const auth = getAuth()
  return signInWithPopup(auth, githubProvider).then(
    formatUserFromFirebasetoUser
  )
}

export const addDevit = ({ email, avatar, message, userId }) => {
  const collectionRef = collection(db, 'devits')
  const payload = {
    email,
    avatar,
    message,
    userId,
    createdAt: Timestamp.fromDate(new Date()),
    likesCount: 0,
    sharedCount: 0,
  }
  return addDoc(collectionRef, payload)
}

export const fetchLatestDevits = () => {
  let array
  const documentRef = collection(db, 'devits')
  onSnapshot(documentRef, (snapshot) => {
    const dataArray = []
    snapshot.docs.map((doc) => {
      const data = doc.data()
      const id = doc.id
      return dataArray.push({
        id,
        ...data,
      })
    })
    console.log('dataArray', dataArray)
    array = dataArray
  })
  console.log('n', array)
}
