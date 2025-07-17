// src/App.jsx
import React from "react";
import BookingCard from "./components/BookingCard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const services = [
  {
    image: "https://picsum.photos/seed/picsum/200/300",
    serviceName: "Home Cleaning",
    description: "Professional cleaning service for your home.",
    price: 999,
  },
  {
    image: "https://picsum.photos/200/300?grayscale",
    serviceName: "Plumbing",
    description: "Expert plumbing repairs and installations.",
    price: 499,
  },
  {
    image: "https://picsum.photos/200/300/?blur",
    serviceName: "Electrician",
    description: "Certified electricians for your home needs.",
    price: 799,
  },
  {
    image: "https://picsum.photos/id/870/200/300?grayscale&blur=2",
    serviceName: "Pest Control",
    description: "Safe and effective pest control services.",
    price: 1199,
  },
  {
    image: "https://picsum.photos/seed/picsum/200/300",
    serviceName: "Home Cleaning",
    description: "Professional cleaning service for your home.",
    price: 999,
  },
  {
    image: "https://picsum.photos/200/300?grayscale",
    serviceName: "Plumbing",
    description: "Expert plumbing repairs and installations.",
    price: 499,
  },
  {
    image: "https://picsum.photos/200/300/?blur",
    serviceName: "Electrician",
    description: "Certified electricians for your home needs.",
    price: 799,
  },
  {
    image: "https://picsum.photos/id/870/200/300?grayscale&blur=2",
    serviceName: "Pest Control",
    description: "Safe and effective pest control services.",
    price: 1199,
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-900">
        Book a Service
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <BookingCard key={index} {...service} />
        ))}
      </div>

      <ToastContainer />
    </div>
  );
}

export default App;
