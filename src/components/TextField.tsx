import React, {useState} from 'react';

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

    const setNewAge = (age:number)=>{
        isNaN(age)?setAge(person.age): setAge(age);
    };


    return (
        <div>
            {text}
            <h1>{age}</h1>
            <h2>{customFunction(person)}</h2>
            <h3>Set your age :</h3>
            <input onChange={event => { setNewAge(event.target.valueAsNumber)}} type="number" />
        </div>
    );
};

export default TextField;