const RazorpayButton = ({ amount, userDetails }) => {
    const handlePayment = async () => {
      const options = {
        key: 'your_key_id_here', // Replace with Razorpay's Key ID
        amount: amount * 100, // Razorpay accepts amount in paisa (1 INR = 100 paisa)
        currency: 'INR',
        name: 'Your Store Name',
        description: 'Order Payment',
        image: 'https://your-logo-url.com/logo.png',
        handler: function (response) {
          alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
          console.log(response); // Process response further
        },
        prefill: {
          name: userDetails.name,
          email: userDetails.email,
          contact: userDetails.phone,
        },
        notes: {
          address: 'Razorpay Corporate Office',
        },
        theme: {
          color: '#3399cc',
        },
      };
  
      const rzp = new window.Razorpay(options);
      rzp.open();
    };
  
    return <button onClick={handlePayment}>Pay ₹{amount}</button>;
  };
  
  export default RazorpayButton;
  