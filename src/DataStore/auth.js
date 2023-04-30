import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./firebase";
import { addUser } from "./dataStore";
const provider = new GoogleAuthProvider();

export function initiateGoogleLogin(callback) {
  signInWithPopup(auth, provider)
    .then(async (result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;

      callback(user.reloadUserInfo, user.accessToken);
      await addUser(user.reloadUserInfo);
      //   GET THE DATA AND STORE IT IN THE DATA STORE user.reloadUserInfo
      /*
    
    */
      //    https://firebase.google.com/docs/auth/web/google-signin
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
}
