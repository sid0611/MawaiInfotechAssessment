import React, { useState, useEffect } from "react";
import BookingCard from "./components/BookingCard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [loading, setLoading] = useState(true);

  const services = [
  {
    image: "https://picsum.photos/seed/picsum/200/300",
    description: "Professional cleaning service for your home.",
    price: 999,
  },
  {
    image: "https://picsum.photos/200/300?grayscale",
    description: "Expert plumbing repairs and installations.",
    price: 499,
  },
  {
    image: "https://picsum.photos/200/300/?blur",
    description: "Certified electricians for your home needs.",
    price: 799,
  },
  {
    image: "https://picsum.photos/id/870/200/300?grayscale&blur=2",
    description: "Safe and effective pest control services.",
    price: 1199,
  },
  {
    image: "https://picsum.photos/seed/picsum/200/300",
    description: "Professional cleaning service for your home.",
    price: 999,
  },
  {
    image: "https://picsum.photos/200/300?grayscale",
    description: "Expert plumbing repairs and installations.",
    price: 499,
  },
  {
    image: "https://picsum.photos/200/300/?blur",
    description: "Certified electricians for your home needs.",
    price: 799,
  },
  {
    image: "https://picsum.photos/id/870/200/300?grayscale&blur=2",
    description: "Safe and effective pest control services.",
    price: 1199,
  },
];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const SkeletonCard = () => (
    <div className="bg-gray-200 rounded-2xl animate-pulse w-full max-w-xs h-[320px] mx-auto">
      <div className="h-48 bg-gray-300 rounded-t-2xl"></div>
      <div className="p-4 space-y-2">
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-3 bg-gray-300 rounded w-2/3"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        <div className="h-10 bg-gray-300 rounded w-full mt-2"></div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-indigo-700 mb-10">
        Book Home Appliance Services
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {loading
          ? Array.from({ length: 8 }).map((_, index) => <SkeletonCard key={index} />)
          : services.map((service, index) => (
              <BookingCard key={index} service={service} />
            ))}
      </div>

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default App;
