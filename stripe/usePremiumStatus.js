import { useState, useEffect } from "react";
import firebase from "../firebase/firebaseClient";
import isUserPremium from "./isUserPremium";

export default function usePremiumStatus(user) {
  const [premiumStatus, setPremiumStatus] = useState(false);

  useEffect(() => {
    if (user) {
      const checkPremiumStatus = async function () {
        setPremiumStatus(await isUserPremium());
        console.log(premiumStatus);
      };
      checkPremiumStatus();
    }
  }, [user]);

  return premiumStatus;
}
