import RazorpayButton from './RazorpayButton';

const CheckoutPage = () => {
  const userDetails = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '9999999999',
  };

  return (
    <div>
      <h1>Checkout</h1>
      <RazorpayButton amount={500} userDetails={userDetails} />
    </div>
  );
};

export default CheckoutPage;
