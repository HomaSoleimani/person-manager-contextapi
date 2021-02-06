import {createContext} from 'react';

const SimpleContext=createContext({
    // state:{},
    persons:[],
    person:"",
    handleDeletePerson:()=>{},
    handleNameChange:()=>{},
    handleNewPerson:()=>{},
    setPerson:()=>{}
});
export default SimpleContext;