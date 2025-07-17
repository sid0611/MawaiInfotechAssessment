// src/components/BookingCard.jsx
import React from "react";
import { toast } from "react-toastify";

const BookingCard = ({ image, serviceName, description, price }) => {
  const handleBooking = () => {
    toast.success(`Successfully booked: ${serviceName}`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-blue-300 transition-all duration-300 w-full sm:max-w-sm md:w-[300px] mx-auto">
      <img
        src={image}
        alt={serviceName}
        className="w-full h-48 object-cover rounded-t-2xl transform transition-transform duration-300 hover:scale-105"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-blue-700 mb-2">{serviceName}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-green-600 font-semibold text-md">₹{price}</span>
          <button
            onClick={handleBooking}
            className="px-3 py-1 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
