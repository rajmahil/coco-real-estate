import React from "react";
import { useEffect, useState } from "react";
import Login from "../components/firebaseComps/Login";
import { useAuthState } from "react-firebase-hooks/auth";
import { createCheckoutSession } from "../stripe/createCheckoutSession";
import usePremiumStatus from "../stripe/usePremiumStatus";
import firebase from "../firebase/firebaseClient";
const Stripe = require("stripe");

const StripePage = ({ customers }) => {
  const [user, userLoading] = useAuthState(firebase.auth());
  const userIsPremium = usePremiumStatus(user);
  const [stripeData, setStripeData] = useState();

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
            <button onClick={() => createCheckoutSession(user.uid)}>
              Upgrade to premium!
            </button>
          ) : (
            <h2>Have a cookie 🍪 Premium customer!</h2>
          )}
        </div>
      )}
    </div>
  ); //uid: "VnJ9SyJ2rIOTjf697ggwpQokSek1"
};

// export async function getServerSideProps(context) {
//   const stripe = Stripe("sk_test_aC2PGa6gjtxykYeoEHiVKdp20028GNZ29p");
//   const customers = await stripe.customers.list({
//     limit: 30,
//   });
//   return {
//     props: { customers },
//   };
// }

export default StripePage;
