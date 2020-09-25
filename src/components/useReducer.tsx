import React, { useReducer} from 'react';

const UseReducer = () => {


    interface stateType{
        count: number
    };

    interface action{
        type: string;
        payload: number
    };

    const initialState:stateType = { count: 0 };

    const increment:action = {type:"increment",payload:5};
    const decrement:action = {type:"decrement",payload:5};

    function reducer(state: stateType, action: action) {
        switch (action.type) {
            case "increment":
                return { count: state.count + action.payload };
            case "decrement":
                return { count: state.count - action.payload };
            default:
                throw new Error();
        }
    }

    function Counter() {

        const [state, dispatch] = useReducer(reducer, initialState);

        return (
            <>
                Count: {state.count}
                <button onClick={() => dispatch(decrement)}>
                    -
                </button>
                <button onClick={() => dispatch(increment)}>
                    +
                </button>
            </>
        );
    }

    return(
        <div>
            <h3>count with useReducer:</h3>
            {Counter()}
        </div>
    );

};

export default UseReducer;