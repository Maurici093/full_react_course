# Autenticación


El primer paso es crear una aplicación para nuestro proyecto desde la consola de firebase:

![Crear app en al consola!](/notes_imgs/firebase-auth-create-app.png "Crear aplicacion en la consola")


Cuando se terminé la creación de la app nos indicara un Json con las credenciales para conectarnos a la app desde nuestro proyecto de react:

```javascript
const firebaseConfig = {
  apiKey: "XxxxxxxXxxXxXxxx",
  authDomain: "crwn-clothing-db-bc096.firebaseapp.com",
  projectId: "crwn-clothing-db-bc096",
  storageBucket: "crwn-clothing-db-bc096.appspot.com",
  messagingSenderId: "93812914770",
  appId: "1:93812914770:web:97b2c1951ee1fb04e8bd8b"
};
```

Como la conexion a la base de datos hace parte de backed de cierto modo, entonces como sugerencia esto deberia ir en una carpeta llamada utils:

Ejemplo de ruta: utils/firebase/firebase.jsx


Nuestro archivo con el manejo de la autenticación deberia ser similar al siguiente:

```javascript
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
 } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "Xxxx Xxxx Xxxx Xxxx",
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
```

Y en el componente que realizara el llamado deberia tener algo similar a lo siguiente: 

```javascript
import { signInWithGooglePopup } from "../../../utils/firebase/firebase";

const SignIn = () => {

  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response)
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

Esto da como resultado lo siguiente:


![Primer uso de la autenticacion co firebase y google!](/notes_imgs/firebase-auth-first-step.png)

Como se observa al realizar clic en el boton "Sign in with Google Popup" se abre un Popup en el cual se puede elegir con que usuario nos queremos autenticar en la app.
