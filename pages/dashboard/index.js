import React from "react";
import { useEffect, useState } from "react";
import Login from "../../components/firebaseComps/Login";
import { useAuthState } from "react-firebase-hooks/auth";
import { createCheckoutSession } from "../../stripe/createCheckoutSession";
import usePremiumStatus from "../../stripe/usePremiumStatus";
import firebase from "../../firebase/firebaseClient";
import { useRouter } from "next/router";

const Dashboard = ({ customer }) => {
  const [user, userLoading] = useAuthState(firebase.auth());
  const [stripeData, setStripeData] = useState();
  const [userId, setUserId] = useState();
  const userIsPremium = usePremiumStatus(user);
  const Router = useRouter();

  const db = firebase.firestore();
  var docRef = db.collection("users").doc(user?.uid);

  const getStripeData = async () => {
    await docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          setStripeData(doc.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  };

  const SignOut = () => {
    firebase
      .auth()
      .signOut()
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // console.log(customers);

  useEffect(() => {
    getStripeData();
    console.log("Stripe Data");
  }, [user]);

  console.log(customer);
  console.log(userId);
  console.log(stripeData?.stripeId.split("_").pop());

  return (
    <div style={{ paddingTop: "150px" }}>
      {!user && userLoading && <h1>Loading...</h1>}
      {!user && !userLoading && (
        <Login stripeId={stripeData?.stripeId.replace(/^\D+/g, "")} />
      )}
      {user && !userLoading && (
        <div>
          <h1>Hello, {user.displayName}</h1>
          {!userIsPremium ? (
            <>
              <button onClick={() => createCheckoutSession(user.uid, stripeId)}>
                Upgrade to premium!
              </button>
            </>
          ) : (
            <div className="">
              <h2>Have a cookie 🍪 Premium customer!</h2>
              <div
                onClick={() =>
                  Router.push(
                    `/dashboard/${stripeData?.stripeId.split("_").pop()}`
                  )
                }
              >
                View Payments
              </div>
              <button onClick={() => SignOut()}>SignOut</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
