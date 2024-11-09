import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import { useCartContext } from "../context/cart_context";
import { FaCheck } from "react-icons/fa"; // For checkmark icon

const AddToCart = ({ product, colors }) => {
  const { addToCart } = useCartContext();
  const { id, stock, price } = product;

  const [amount, setAmount] = useState(1);
  const [color, setColor] = useState(colors ? colors[0] : "defaultColor");

  const setDecrease = () => {
    setAmount((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const setIncrease = () => {
    setAmount((prev) => (prev < stock ? prev + 1 : stock));
  };

  const handlePayment = async (amount) => {
    const res = await loadRazorpayScript();

    if (!res) {
      alert("Failed to load Razorpay SDK. Check your connection.");
      return;
    }

    const result = await fetch("http://localhost:3001/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }),
    });

    const data = await result.json();

    if (!data) {
      alert("Server error. Try again.");
      return;
    }

    const options = {
      key: "your_key_id", // Replace with Razorpay key
      amount: data.amount,
      currency: data.currency,
      name: "E-Commerce Store",
      description: "Test Transaction",
      order_id: data.id,
      handler: (response) => {
        alert(`Payment ID: ${response.razorpay_payment_id}`);
        alert(`Order ID: ${response.razorpay_order_id}`);
        alert(`Signature: ${response.razorpay_signature}`);
      },
      theme: { color: "#3399cc" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <Wrapper>
      {/* Color Selection */}
      {colors && colors.length > 0 && (
        <div className="colors">
          <p>
            Color: 
            {colors.map((curColor, index) => (
              <button
                key={index}
                style={{ backgroundColor: curColor }}
                className={color === curColor ? "btnStyle active" : "btnStyle"}
                onClick={() => setColor(curColor)}>
                {color === curColor && <FaCheck className="checkStyle" />}
              </button>
            ))}
          </p>
        </div>
      )}

      {/* Amount Selection */}
      <CartAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />

      {/* Add to Cart */}
      <NavLink to="/cart" onClick={() => addToCart(id, color, amount, product, price)}>
        <Button className="btn">Add To Cart</Button>
      </NavLink>

      {/* Pay Now Button */}
      <Button className="btn" onClick={() => handlePayment(amount * price)}>
        Pay Now
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
`;

export default AddToCart;
