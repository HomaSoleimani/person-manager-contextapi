// import React, { Component } from 'react';

// import SimpleContext from './../context/SimpleContext';
// import Person from './Person';
// class Persons extends Component {
//     static contextType=SimpleContext;
//     render() {
//         console.log("Persons.jsx rendered");
//         const {state,handleDeletePerson,handleNameChange}=this.context;
//         return (
//             <div>
//                 {state.persons.map(person=>(
//                 <Person fullName={person.fullName} key={person.id}
//                 deleted={()=>handleDeletePerson(person.id)}
//                 changed={(event)=>handleNameChange(event,person.id)}
//                 />
//             ))}
//         </div>
//          );
//     }
// }

// export default Persons;

// functional Persons.jsx
import React, { useContext } from "react";

import SimpleContext from "./../context/SimpleContext";
import Person from "./Person";

const Persons = () => {
  console.log("Persons.jsx rendered");
  const context = useContext(SimpleContext);
  const { persons } = context;
  return (
    <div>
      {persons.map((person) => (
        <Person
          fullName={person.fullName}
          key={person.id}
          deleted={() => context.handleDeletePerson(person.id)}
          changed={(event) => context.handleNameChange(event, person.id)}
        />
      ))}
    </div>
  );
};

export default Persons;
