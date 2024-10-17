import React, { useState } from "react";
import "./modal.css";

const OrderConfirmationModal = ({ isModalOpen, handleModalClose }) => {
  if (!isModalOpen) return null; // Do not render if not open

  return (
    <div className="confirmation-modal">
      <div className="confirmation-modal-content">
        <div className="confirmation-modal-title">Order Confirmed!</div>
        <div className="confirmation-modal-message">
          Your order has been successfully placed!
        </div>
        <button className="confirmation-close-btn" onClick={handleModalClose}>
          Close
        </button>
      </div>
    </div>
  );
};
const ConfirModel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOrderConfirm = () => {
    // Logic for confirming the order can go here
    setIsModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div className="checkout-page-container">
      <h2 className="checkout-page-title">Checkout</h2>
      {/* Other checkout form elements can be here */}
      <button onClick={handleOrderConfirm} className="checkout-confirm-btn">
        Confirm Order
      </button>
      <OrderConfirmationModal
        isModalOpen={isModalOpen}
        handleModalClose={handleCloseModal}
      />
    </div>
  );
};

export default ConfirModel;
