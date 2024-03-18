import React from 'react'
// import '../App.css'
// import styles from './Student.model.css';

import propTypes from 'prop-types'

function UserGreeting(props) {

    const welcomeMessage= <h2 className='welcome-message'>Welcome {props.username}</h2> 
    const loginPrompt =   <h2 className='login-prompt'>Please log in to continue</h2>



return (
    
    props.isLoggedIn ? welcomeMessage : loginPrompt
    // <h2 >Welcome {props.username}</h2> :
    // <h2>Please log in to continue</h2>
    );

//     if(props.isLoggedIn){
//         return <h1>Welcome {props.username}</h1>
//     }

// else{
//   return (
//     <div>
        
// <h1>Please Log in to continue</h1>

//     </div>
//   )
  //}
}


UserGreeting.propTypes ={
isLoggedIn: propTypes.bool,
username: propTypes.string,

}

UserGreeting.defaultProps = {

isLoggedIn: false,
username: "Guest",
}



export default UserGreeting