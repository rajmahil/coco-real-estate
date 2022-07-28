import { Stripe, loadStripe } from "@stripe/stripe-js";

let stripePromise = Stripe | null;

const initializeStripe = async () => {
  if (!stripePromise) {
    stripePromise = await loadStripe(
      "pk_test_ssBc8HcbzPNYPgz8gzOj5jPi00ak8JEzmc"
    );
  }
  return stripePromise;
};

export default initializeStripe;