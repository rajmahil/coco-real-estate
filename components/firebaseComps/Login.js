import React from "react";
import firebase from "../../firebase/firebaseClient";

const Login = () => {
  async function signInWithGoogle() {
    const userCredentials = await firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider());

    console.log({ ...userCredentials.user });

    firebase.firestore().collection("users").doc(userCredentials.user.uid).set({
      uid: userCredentials.user.uid,
      email: userCredentials.user.email,
      name: userCredentials.user.displayName,
      provider: userCredentials.user.providerData[0].providerId,
      photoUrl: userCredentials.user.photoURL,
    });
  }
  return (
    <div style={{ paddingTop: "100px" }}>
      <button onClick={() => signInWithGoogle()}>Sign In With Google</button>
    </div>
  );
};

export default Login;
