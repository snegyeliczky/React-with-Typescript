import React from 'react';

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

    return (
        <div>
            {text}
            <h1>{person.age}</h1>
            <h2>{customFunction(person)}</h2>
        </div>
    );
};

export default TextField;