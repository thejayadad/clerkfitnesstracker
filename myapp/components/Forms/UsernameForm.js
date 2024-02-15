'use client'
import {useState} from "react";
import SubmitButton from "../Buttons/SubmitButton";

const UsernameForm = ({desiredUsername}) => {
  return (
    <form>
        <input
         defaultValue={desiredUsername}
         type="text"
         className="px-4 py-2 w-56 border mb-2 rounded focus:outline-none focus:border-primary"
        />
        <SubmitButton>
            <span>Grab Your UserName</span>
        </SubmitButton>
    </form>
  )
}

export default UsernameForm