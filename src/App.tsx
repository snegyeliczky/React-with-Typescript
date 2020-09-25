import React from 'react';
import './App.css';
import TextField, {Person} from "./components/TextField";
import UseReducer from "./components/useReducer";

const App:React.FC =()=> {

    let Sandi:Person = {
        name:"Sándi",
        age:27
    };

    const welcomePerson = (person:Person)=>{
        return`Hello Mr. ${person.name} Maestro`
    };

  return (
    <div className="App">
      Yo
        <TextField text={"Chiao Bella Bellisimo!"} customFunction={welcomePerson} person={Sandi}/>
        <UseReducer/>
    </div>
  );
};

export default App;
