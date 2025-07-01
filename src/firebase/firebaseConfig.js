import{initializeApp} from 'firebase/app';
import{getAuth} from 'firebase/auth';
import{getFirestore} from 'firebase/firestore';
import{getStorage} from 'firebase/storage';

const firebaseConfig = {
    apikey:"AIzaSyC_B9WvE1BKUY2eOUxn3jlfdqj_7OA9c",
    authDomain:"skillstack-f0e0f.firebaseapp.com",
    projectId:"skillstack-f0e0f",
    StorageBucket:"skillstack-f0e0f.firebasestorage.app",
    messagingSenderId:"1068999850188",
    appId:"1:1068999850188:web:99b0a44a2aea84219f6a69"
};

const app=
initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);