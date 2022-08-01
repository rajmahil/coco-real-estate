import React from "react";

const UserDashboard = ({ customer }) => {
  console.log(customer);
  return <div>sss</div>;
};

export async function getServerSideProps(context) {
  const id = context.query.stripeId; // Get ID from slug `/book/1`
  // If routing to `/book/1?name=some-book`
  console.log(context.query); // Outputs: `{ id: '1', name: 'some-book' }`

  const stripe = require("stripe")(
    "sk_live_SBsuzb6vsbMxEQsJi6FBHE9a00HO94wGwP"
  );
  const customer = await stripe.customers.retrieve(`cus_${id}`);

  return {
    props: { customer }, // will be passed to the page component as props
  };
}

export default UserDashboard;
