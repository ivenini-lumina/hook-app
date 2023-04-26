import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "../03-examples";

export const Layout = () => {

    const initialCounter = 1;
    const incrementPace = 1;
    const {counter, increment} = useCounter(initialCounter);
    const url = `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`;

    const { data, isLoading, hasError } = useFetch(url);
    
    // console.log({ data, isLoading, hasError });

    const { author, quote } = !!data && data[0];     

    return (
        <>
            <h1>Breaking Bad Quotes Layout</h1>
            <hr/>

            {
                isLoading
                    ?(<LoadingQuote />)
                    :(<Quote author={author} quote={quote}/>)
            }

            <button 
                className="btn btn-primary" 
                onClick={()=>increment(incrementPace)}
                disabled= {isLoading}
            >
                Next quote
            </button>
        </>        
    );
}
