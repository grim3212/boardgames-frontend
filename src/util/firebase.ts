import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDgFuRvo54BcYUl8JgyXE6wlwpf5clarW8',
  authDomain: 'boardgame-votes.firebaseapp.com',
  projectId: 'boardgame-votes',
  storageBucket: 'boardgame-votes.appspot.com',
  messagingSenderId: '768891140744',
  appId: '1:768891140744:web:c6f448644750530f3ebd3d',
}
// Initialize Firebase
export const db = firebase.initializeApp(firebaseConfig).firestore()

export const CURRENT_VOTING = 'beach-2021-08-21'

export const votes = () => db.collection('votes').doc(CURRENT_VOTING)
export const now = () => firebase.firestore.Timestamp.now()

export async function initCurrentVoting() {
  const votesRef = votes()

  await votesRef.get().then((doc) => {
    if (!doc.exists) {
      votesRef.set({
        name: CURRENT_VOTING,
      })
    }
  })
}
