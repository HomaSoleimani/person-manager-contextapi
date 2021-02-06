import React,{ useContext,useRef,useEffect } from 'react';

import SimpleContext from './../context/SimpleContext';

const NewPerson = () => {
    const focusInput=useRef(null);
    console.log("NewPerson.jsx rendered");
    const context=useContext(SimpleContext);
    useEffect(()=>{
        focusInput.current.focus();
    });
    return (
            <div className="m-2 p-2">
                <form className="form-inline justify-content-center" 
                onSubmit={event=>event.preventDefault()}>
                    <div className="input-group w-25">
                        <input type="text" placeholder="بهم اسم بده" className="form-control"
                        onChange={(event)=>context.setPerson(event)}
                        // value={context.state.person}
                        value={context.person}
                        ref={focusInput}
                        />
                        <div className="input-group-prepend">
                            <button type="submit" onClick={context.handleNewPerson} 
                                className="btn btn-success btn-sm fa fa-plus-square"
                            />
                        </div>
                    </div>
                </form>
            </div>
     );
};
 
export default NewPerson;