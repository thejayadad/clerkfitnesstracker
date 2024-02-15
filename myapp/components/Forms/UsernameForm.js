'use client'
import {useState} from "react";
import SubmitButton from "../Buttons/SubmitButton";
import grabUsername from "@/lib/action";
import { redirect } from "next/navigation";

const UsernameForm = ({desiredUsername}) => {
    const [taken,setTaken] = useState(false);
    async function handleSubmit(formData) {
      const result = await grabUsername(formData);
  
      setTaken(result === false);
      if (result) {
        redirect('/account?created='+formData.get('username'));
      }
    }
  return (
    <form
    action={handleSubmit}
    >
        <input
        name='username'
         defaultValue={desiredUsername}
         type="text"
         className="px-4 py-2 w-56 border mb-2 rounded focus:outline-none focus:border-primary"
        />
        {taken && (
          <div className="bg-red-200 border border-secondary p-2 mb-2 text-center">
            This username is taken
          </div>
        )}
        <SubmitButton>
            <span>Grab Your UserName</span>
        </SubmitButton>
    </form>
  )
}

export default UsernameForm