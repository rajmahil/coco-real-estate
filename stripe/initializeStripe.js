import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

const initializeStripe = async () => {
  if (!stripePromise) {
    stripePromise = await loadStripe(
      "pk_live_dBmCueKUmT0nfMTklSVUETYG00sdvP75Dt"
    );
  }
  return stripePromise;
};

export default initializeStripe;
