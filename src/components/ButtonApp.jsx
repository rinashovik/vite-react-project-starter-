import React, { useState } from 'react'



const Button = props=>{


  const {name,more} = props;

  return (
    <button>{name}{more}</button>
  )
}


 function ButtonApp() {

  const [text, setText] = useState("new Button")
  return (
    <div>
      <Button  name={text} more={1} />
    </div>
  )
}
export default ButtonApp