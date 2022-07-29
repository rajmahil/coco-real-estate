import React from "react";
import { useEffect, useState } from "react";
import Login from "../components/firebaseComps/Login";
import { useAuthState } from "react-firebase-hooks/auth";
import { createCheckoutSession } from "../stripe/createCheckoutSession";
import usePremiumStatus from "../stripe/usePremiumStatus";
import firebase from "../firebase/firebaseClient";

const StripePage = ({ customers }) => {
  const [user, userLoading] = useAuthState(firebase.auth());
  const userIsPremium = usePremiumStatus(user);
  const [stripeData, setStripeData] = useState();
  const db = firebase.firestore();
  var docRef = db.collection("users").doc(user?.uid);

  docRef
    .get()
    .then((doc) => {
      if (doc.exists) {
        console.log("Document data:", doc.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    });

  const SignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  // console.log(customers);
  console.log(user);

  return (
    <div style={{ paddingTop: "150px" }}>
      {!user && userLoading && <h1>Loading...</h1>}
      {!user && !userLoading && <Login />}
      {user && !userLoading && (
        <div>
          <h1>Hello, {user.displayName}</h1>
          {!userIsPremium ? (
            <>
              <button onClick={() => createCheckoutSession(user.uid)}>
                Upgrade to premium!
              </button>
              <button onClick={() => SignOut()}>SignOut</button>
            </>
          ) : (
            <>
              <h2>Have a cookie 🍪 Premium customer!</h2>
              <button onClick={() => SignOut()}>SignOut</button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default StripePage;
