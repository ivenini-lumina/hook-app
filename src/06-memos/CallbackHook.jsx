import { useCallback, useEffect, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {

    const [counter, setCounter] = useState( 10 );

    const incrementFather = useCallback(
      (value) => {
        // console.log(value);
        setCounter( (c) =>  c + value );
      },
      [],
    );    

    // const incrementFather = () => {
    //     setCounter( counter + 1 );
    // };

    useEffect(() => {
        incrementFather(5);        
    }, [incrementFather]);    

    return (
        <>
            <h1>useCallBack Hook: { counter } </h1> 
            <hr/>

            <ShowIncrement increment={incrementFather} />            
        </>    
    );
}
