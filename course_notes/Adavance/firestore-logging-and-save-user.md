# Firebase Logging y Almacenar usuarios en Firestore


Se agrega una nueva funcion **createUserDocumentFromAuth** la cual verifica una referencia al usuario logeado y si no existe procede a crearlo.

```javascript
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
 } from 'firebase/auth';

import {
 getFirestore,
 doc,
 getDoc,
 setDoc,
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD93YSOXhr52gZbOrmKTKc75CNkRGSk3FE",
  authDomain: "crwn-clothing-db-bc096.firebaseapp.com",
  projectId: "crwn-clothing-db-bc096",
  storageBucket: "crwn-clothing-db-bc096.appspot.com",
  messagingSenderId: "93812914770",
  appId: "1:93812914770:web:97b2c1951ee1fb04e8bd8b"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
})


export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
         displayName, 
         email, 
         createdAt
      });
    } catch (error) {
      console.log('error creating the user',error.message);
    }

  }

  return userDocRef;

};
```

Y en el componente que controla la autenticacion se importa y se hace el llamado al metodo enviando la respuesta que proporsiona Firebase de un usuario autenticado.


```javascript
import { 
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();    
    const loggedUser = await createUserDocumentFromAuth(user);
    console.log(loggedUser)
  }

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={ logGoogleUser }>
        Sign in with Google Popup
      </button>
    </div>
  );
}

export default SignIn;
```
