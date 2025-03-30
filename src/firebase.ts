// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyByjoge0MSUJYYiQcmNpyhyeHMJ-8Zc-6M',
  authDomain: 'vue-test-faa56.firebaseapp.com',
  projectId: 'vue-test-faa56',
  storageBucket: 'vue-test-faa56.firebasestorage.app',
  messagingSenderId: '909425359090',
  appId: '1:909425359090:web:c498276eeb7d70e317b86b',
  measurementId: 'G-Q3GD8NYFX0',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore(app)

export { db }
