import { act, renderHook } from '@testing-library/react';
import { useCounter } from '../../src/hooks/useCounter'

describe('Pruebas en el useCounter', () => { 

    test('Deber de retornar los valores por defecto', () => { 

        const { result } = renderHook( () => useCounter () );     
        const { counter, increment, decrement, reset } = result.current;  

        expect(counter).toBe(10);
        expect(increment).toEqual( expect.any(Function) );
        expect(decrement).toEqual( expect.any(Function) );
        expect(reset).toEqual( expect.any(Function) );

    });        

    test('Deber de generar el counter con valor 100', () => { 

        const counterVal = 100;

        const { result } = renderHook( () => useCounter ( counterVal ) );     
        const { counter } = result.current;  

        expect(counter).toBe(counterVal);
                    
    });      

    test('Deber de incrementar el contador', () => { 

        const { result } = renderHook( () => useCounter ( 100 ) );     
        const { increment } = result.current;  

        act( () => {
            increment();
            increment(2);
        });

        expect(result.current.counter).toBe(103);                    
    });          

    test('Deber de decrementar el contador', () => { 

        const { result } = renderHook( () => useCounter ( 100 ) );     
        const { decrement } = result.current;  

        act( () => {
            decrement();
            decrement(2);
        });

        expect(result.current.counter).toBe(97);                    
    });   


    test('Deber de resetear el contador', () => { 

        const { result } = renderHook( () => useCounter ( 100 ) );     
        const { decrement, reset } = result.current;  

        act( () => {
            decrement();
            reset();
        });

        expect(result.current.counter).toBe(100);                    
    });   


});