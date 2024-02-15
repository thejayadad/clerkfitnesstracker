'use client'
import React from 'react';
import { FaDumbbell } from 'react-icons/fa';


// Reusable Input Component
const Input = ({ placeholder }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="px-4 py-2 w-56  rounded focus:outline-none focus:border-primary"
    />
  );
}

// Reusable Button Component
const Button = ({ children }) => {
  return (
    <button className="px-4 py-2 bg-gray-400  rounded hover:bg-secondary transition-colors duration-300 focus:outline-none">
      {children}
    </button>
  );
}

// Reusable Form Component
const HeroForm = () => {
  return (
    <div className="flex items-center mx-auto max-w-screen-md justify-center">
      <span className="mr-4">
        <FaDumbbell className="text-3xl" />
      </span>
      <div>
        <form>
        <Input placeholder="Username" />
        <Button>Access</Button>
        </form>
      </div>
    </div>
  );
}

export default HeroForm;
