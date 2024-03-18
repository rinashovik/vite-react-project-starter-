import React from 'react'
import Students from './Students'
import UserGreeting from './UserGreeting'

//parent component send data to child componet as a props
//<Component key-value>

function Welcome() {

// const students = [
//   {id: 1,
//     name: "kelley",
//     age : 25,
//     isStudent:true
//   },

//   {id: 2,
//     name: "Salley",
//     age : 25,
//     isStudent:true
//   },
//   {id: 3,
//     name: "Lilly",
//     age : 25,
//     isStudent:true
//   }


//]

  return (
    <div>
        <UserGreeting  isLoggedIn={true} username="techno" />

        {/* <Students  items={students}/> */}
        <Students stId={1} name="Kelly" age={25} isStudent={true}/>
        <Students  name="Tom" age={41} isStudent={false}/>
        <Students  name="Sam" age={22} isStudent={true}/>    
        <Students />    

        
         </div>

        )
}

export default Welcome