import React, { useContext,useEffect } from 'react';
import SimpleContext from './../context/SimpleContext';

const Header = ({appTitle}) => {
    console.log("Header.jsx rendered");
    const context =useContext(SimpleContext);
    // const {persons}=context.state;
    const {persons}=context;
    // useEffect(()=>{
    //     console.log("Header.jsx useEffect");
    //     const timer=setTimeout(()=>alert("Data Saved"),1000);
    //     return ()=>{
    //         console.log("Header.jsx Unmount");
    //         clearTimeout(timer);
    //     };
    // },[persons]);
    let badgeStyle='';
    if(persons.length>=3) badgeStyle='badge-success';
    if(persons.length===2) badgeStyle='badge-warning';
    if(persons.length<=1) badgeStyle='badge-danger';
    return (
        <div>
        <div className="alert alert-info">
            <h1>{appTitle}</h1>
        </div>
            <h5 className="alert alert-light">
                تعداد اشخاص <span className={`badge badge-pill ${badgeStyle}`}>
                    {persons.length}
                </span> نفر میباشد</h5>
        </div>
     );
}
 
export default Header;