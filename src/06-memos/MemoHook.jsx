import { useMemo, useState } from "react";
import { useCounter } from "../hooks"

const heavyStruff = ( iterationNumber = 100 ) => {
    for (let i = 0; i < iterationNumber; i++){
        console.log('Ahi vamos');
    }
    const doneMsg = `${iterationNumber} iterations done`; 
    console.log(doneMsg);
    return doneMsg;   
};

export const MemoHook = () => {
    const {counter, increment} = useCounter( 4000 );

    const [show, setShow] = useState(true);

    const memorizedValue = useMemo( () => heavyStruff(counter), [counter]);
    
    return (
        <>
            <h1>Counter: <small> {counter} </small> </h1>
            <hr></hr>

            <h4> { memorizedValue } </h4>

            <button 
                className="btn btn-primary mt-2"
                onClick={() => increment()}
                >+1
            </button>   
            <button
                className="btn btn-outline-primary"
                onClick={() => {setShow(!show)} }
                >
                Show/Hide { JSON.stringify(show) }
            </button>
        </>
    );
}
