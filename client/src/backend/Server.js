const Razorpay = require('razorpay');
const express = require('express');
const app = express();

app.use(express.json());

const razorpay = new Razorpay({
  key_id: 'your_key_id',
  key_secret: 'your_key_secret',
});

app.post('/create-order', async (req, res) => {
  const { amount } = req.body;
  const options = {
    amount: amount * 100, // Convert to paisa
    currency: 'INR',
    receipt: 'order_rcptid_11',
  };

  try {
    const order = await razorpay.orders.create(options);
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3001, () => console.log('Server running on port 3001'));
