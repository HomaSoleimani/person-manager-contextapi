// import React, { Component} from 'react';

// import SimpleContext from './components/context/SimpleContext';
// import Header from './components/common/Header';
// import Persons from './components/person/Persons';
// import NewPerson from './components/person/NewPerson';
// class App extends Component {
//     constructor(){
//         super();
//         console.log('App.js constructor');
//     }
//     state = { 
//         persons:[],
//         person:"",
//         showPersons:true,
//         showHeader:true
//     };
//     static getDerivedStateFromProps(props,state){
//         console.log("App.js getDerivedStateFromProps");
//         return state;
//     }
//     componentDidMount(){
//         console.log("App.js componentDidMount");
//     }
//     shouldComponentUpdate(nextProps,nextState){
//         console.log("App.js shouldComponentUpdate");
//         return true;
//     }
//     getSnapshotBeforeUpdate(prevProps,prevState){
//         console.log("App.js getSnapshotBeforeUpdate");
//         const snapshot={prevProps,prevState};
//         return snapshot;
//     }
//     componentDidUpdate(prevProps,prevState,snapshot){
//         console.log("App.js componentDidUpdate");
//         console.log(snapshot);
//     }
//     handleShowPerson=()=>{
//         this.setState({showPersons:!this.state.showPersons});
//     };
//     handleShowHeader=()=>{
//         this.setState({showHeader:!this.state.showHeader});
//     };
//     handleDeletePerson=id=>{
//         const persons=[...this.state.persons];
//         const filteredPersons=persons.filter(p=>p.id!==id);
//         this.setState({persons:filteredPersons});
//     };
//     handleNameChange=(event,id)=>{
//         const allPersons=[...this.state.persons];
//         const personIndex=allPersons.findIndex(p=>p.id===id);
//         const person=allPersons[personIndex];
//         person.fullName=event.target.value;
//         allPersons[personIndex]=person;
//         this.setState({persons:allPersons});
//     };
//     setPerson=event=>{
//         this.setState({person:event.target.value});
//     };
//     handleNewPerson=()=>{
//         const persons=[...this.state.persons];
//         const person={id:Math.floor(Math.random()*1000),fullName:this.state.person};
//         if(person.fullName!=="" && person.fullName!==" "){
//             persons.push(person);
//             this.setState({persons,person:""});
//         }

//     };
//     render() { 
//         console.log("App.js rendered");
//         const {showPersons,showHeader}=this.state;
//         return ( 
//             <SimpleContext.Provider value={{
//                 state:this.state,handleDeletePerson:this.handleDeletePerson,
//                 handleNameChange:this.handleNameChange,handleNewPerson:this.handleNewPerson,
//                 setPerson:this.setPerson
//             }}>
//                 <div className="rtl text-center">
//                     {showHeader ? (<Header appTitle="مدیریت کننده‌ی اشخاص"/>) : null}
//                     <button className="btn btn-primary" 
//                     onClick={this.handleShowHeader}>نمایش هدر</button>
//                     <NewPerson/>
//             <button className={showPersons ? "btn btn-info" : "btn btn-danger"} 
//             onClick={this.handleShowPerson}>نمایش اشخاص</button>
//             {showPersons ? (<Persons />) : null}
//         </div> 
//             </SimpleContext.Provider>
//          );
//     }
// }

// functional App.js
import React, {useState} from 'react';

import SimpleContext from './components/context/SimpleContext';
import Header from './components/common/Header';
import Persons from './components/person/Persons';
import NewPerson from './components/person/NewPerson';
const App = () => {
    const [getPersons,setPersons]=useState([]);
    const [getSinglePerson,setSinglePerson]=useState("");
    const [getShowPersons,setShowPersons]=useState(true);
    const handleShowPerson=()=>{
        setShowPersons(!getShowPersons);
    };
    const handleDeletePerson=id=>{
        const persons=[...getPersons];
        const filteredPersons=persons.filter(p=>p.id!==id);
        setPersons(filteredPersons);
    };
    const handleNameChange=(event,id)=>{
        const allPersons=[...getPersons];
        const personIndex=allPersons.findIndex(p=>p.id===id);
        const person=allPersons[personIndex];
        person.fullName=event.target.value;
        allPersons[personIndex]=person;   
        setPersons(allPersons);
    };
    const setPerson=event=>{
        setSinglePerson(event.target.value);
      };
    const handleNewPerson=()=>{
        const persons=[...getPersons];
        const person={id:Math.floor(Math.random()*1000),
          fullName:getSinglePerson 
        };
        if(person.fullName!=="" && person.fullName!==" "){
            persons.push(person);
            setPersons(persons);
            setSinglePerson("");
        }
    };
    return ( 
        <SimpleContext.Provider value={{
            persons:getPersons,person:getSinglePerson,handleDeletePerson:handleDeletePerson,
            handleNameChange:handleNameChange,handleNewPerson:handleNewPerson,
            setPerson:setPerson
        }}>
            <div className="rtl text-center">
                <Header appTitle="مدیریت کننده‌ی اشخاص"/>
                <NewPerson/>
                <button className={getShowPersons ? "btn btn-info" : "btn btn-danger"} 
                onClick={handleShowPerson}>نمایش اشخاص</button>
                {getShowPersons ? (<Persons />) : null}
        </div> 
        </SimpleContext.Provider>
     );
}
 
export default App;