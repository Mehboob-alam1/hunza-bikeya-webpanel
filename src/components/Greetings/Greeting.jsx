import React from 'react'
import Hello from "../../assets/hello.png";

const Greeting = () => {
  return (
    <div>
      <h3 className="text-xl font-bold flex items-center gap-x-2">
        Hello Muiz! <img src={Hello} alt="hello" width="32" />
      </h3>
    </div>
  )
}

export default Greeting
