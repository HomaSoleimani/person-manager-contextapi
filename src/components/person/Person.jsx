// import React, { Component } from 'react';
// class Person extends Component {
//     componentWillUnmount(){
//         console.log("Person.jsx componentWillUnmount");
//     }
//     render() { 
//         console.log("Person.jsx rendered");
//         const {fullName,deleted,changed}=this.props;
//         return ( 
//             <div className="card text-white bg-info my-3 mx-auto w-25">
//         <div className="card-body text-center">
//             <p className="d-block">{fullName}</p>
//             <div className="input-group justify-content-center">
//                 <input className="form-control w-50" type="text" placeholder={fullName} 
//                 onChange={changed}/>
//                 <div className="input-group-prepend">
//                 <button className="btn btn-sm btn-danger fa fa-trash" onClick={deleted} />
//                 </div>
//             </div>
//         </div>
//     </div> 
//          );
//     }
// }
 
// export default Person;

// functional Person.jsx
import React from 'react';
import PropTypes from "prop-types";
// import './Person.css';

const Person = ({fullName,deleted,changed}) => {
    console.log("Person.jsx rendered");
    return ( <div className="card text-white bg-info my-3 mx-auto w-25">
        <div className="card-body text-center">
            <p className="d-block">{fullName}</p>
            <div className="input-group justify-content-center">
                <input className="form-control w-50" type="text" placeholder={fullName} 
                onChange={changed}/>
                <div className="input-group-prepend">
                <button className="btn btn-sm btn-danger fa fa-trash" onClick={deleted} />
                </div>
            </div>
        </div>
    </div> );
};
Person.propTypes={
    fullName:PropTypes.string,
    deleted:PropTypes.func,
    changed:PropTypes.func
};
export default Person;