import React from 'react'
import propTypes from 'prop-types'
// import styles from "./Student.css"



function Students(props) {


  // const students = [
  //   {stId: 1,
  //     name: "kelley",
  //     age : 25,
  //     isStudent:true,
  //   },
  
  //   {stId: 2,
  //     name: "Salley",
  //     age : 25,
  //     isStudent:true,
  //   },{stId: 3,
  //     name: "Lilly",
  //     age : 25,
  //     isStudent:true,
  //   },
  
  
  // ]

  return (
    <div className='student'>
{/* 
{<ul>
  {props.items.map(item => {

<li  key={item.id}>{item.id} </li>
{/* <li>{item.name}</li> */}
{/* 
 <li>{item.age}</li>
 <li>{item.isStudent}</li>
  })}
  
    </ul>}  */}

     
               <h3>St_Id: {props.stId}</h3>    

        <h3>Name: {props.name}</h3>    
        <h3> Age: {props.age} </h3>
        <h3>Student: {props.isStudent ? "Yes" : "NO"} </h3> 

    </div>

  );
}

Students.propTypes = {
  name: propTypes.string,
  age: propTypes.number,
  isStudent: propTypes.boolean,
}

Students.defaultProps = {
  stId: number,
name: "Guest",
age: 0,
isStudent: false,

}

export default Students