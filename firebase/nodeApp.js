import * as admin from 'firebase-admin'

if (!admin.apps.length) {
  admin.initializeApp({
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  })
}

export default admin
