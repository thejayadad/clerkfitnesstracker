'use client'
import React from 'react';
import { FaDumbbell } from 'react-icons/fa';
import {signIn} from "next-auth/react";
import {redirect, useRouter} from "next/navigation";
import {useEffect} from "react";
import FormContainer from '../shared/FormContainer';
import Input from './Input';



// Reusable Button Component
const Button = ({ children }) => {
  return (
    <button 
    type='submit'
    className="px-4 py-2 bg-gray-400  rounded hover:bg-secondary transition-colors duration-300 focus:outline-none">
      {children}
    </button>
  );
}

// Reusable Form Component
const HeroForm = ({user}) => {
    const router = useRouter();
    useEffect(() => {
      if (
        'localStorage' in window
        && window.localStorage.getItem('desiredUsername')
      ) {
        const username = window.localStorage.getItem('desiredUsername');
        window.localStorage.removeItem('desiredUsername');
        redirect('/account?desiredUsername=' + username);
      }
    }, []);
    async function handleSubmit(ev) {
      ev.preventDefault();
      const form = ev.target;
      const input = form.querySelector('input');
      const username = input.value;
      if (username.length > 0) {
        if (user) {
          router.push('/account?desiredUsername='+username);
        } else {
          window.localStorage.setItem('desiredUsername', username);
          await signIn('google');
        }
      }
    }
  return (
    <FormContainer>
                <form
        onSubmit={handleSubmit}
        >
        <Input
        type='text'

        placeholder="Username" />
        <Button
        >Access</Button>
        </form>
    </FormContainer>
  );
}

export default HeroForm;
