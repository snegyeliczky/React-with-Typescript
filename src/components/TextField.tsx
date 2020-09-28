import React, {useRef, useState} from 'react';

export interface Person{
    name:string;
    age:number
}

interface Props {
    text:string;
    number?:number;
    boolean?:boolean;
    customFunction:(param:Person)=>string;
    person:Person
}

const TextField:React.FC <Props> = ({text, person,customFunction}) => {

    const [age,setAge] = useState<number|null>(person.age);
    const[perName,setName] = useState<string>(person.name)
    const inputRef =useRef<HTMLInputElement>(null);

    const onButtonClick = () => {
        if (inputRef && inputRef.current) {
            let newName=inputRef.current.value;
            setName(newName);
        }
    };


    const setNewAge = (age:number)=>{
        isNaN(age)?setAge(person.age): setAge(age);
    };


    return (
        <div>
            {text}
            <h2>{customFunction(person)}</h2>
            <h3>Set your age with useState:</h3>
            <input onChange={event => { setNewAge(event.target.valueAsNumber)}} type="number" />
            <h1>{age}</h1>
            <h3>Set your name with useRef:</h3>
            <input ref={inputRef}  />
            <button onClick={onButtonClick}>Change name</button>
            <h1>{perName}</h1>

        </div>
    );
};

export default TextField;