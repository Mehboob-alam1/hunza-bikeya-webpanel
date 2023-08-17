import React from 'react'
import Hello from "../../assets/hello.png";
import { useBikeya } from '../../context/Context';

const Greeting = () => {

  const {user} = useBikeya()
  console.log(user)
  return (
    <div>
      <h3 className="text-xl font-bold flex items-center gap-x-2 capitalize">
        Hello {user && user.displayName} <img src={Hello} alt="hello" width="32" />
      </h3>
    </div>
  )
}

export default Greeting
