import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples";
import { useCounter } from "../../src/hooks/useCounter";
import { useFetch } from "../../src/hooks/useFetch";

jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");

describe('Pruebas en MultipleCustomHooks',  () => { 

    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement,
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('Debe de mostrar el componente por defecto', () => { 

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null,
        });

        render(<MultipleCustomHooks />);
        
        expect( screen.getByText('Loading...') );
        expect( screen.getByText('Breaking Bad Quotes') );
        
        const nextButton = screen.getByRole('button', {name: 'Next quote'});
        expect( nextButton.disabled ).toBeTruthy();
        
        // screen.debug();      

    });    

    test('Debe de mostrar un Quote', () => { 

        useFetch.mockReturnValue({
            data: [ { author: 'Fernando', quote: 'Hola Mundo'} ],
            isLoading: false,
            hasError: null,
        });

        render(<MultipleCustomHooks />);        

        expect( screen.getByText('Fernando') );
        expect( screen.getByText('Hola Mundo') );      
        
        const nextButton = screen.getByRole('button', {name: 'Next quote'});
        expect( nextButton.disabled ).toBeFalsy();
        
    });  

    test('Debe de llamar la funcion de incrementar', () => { 

        useFetch.mockReturnValue({
            data: [ { author: 'Fernando', quote: 'Hola Mundo'} ],
            isLoading: false,
            hasError: null,
        });

        render(<MultipleCustomHooks />);        

        const nextButton = screen.getByRole('button', {name: 'Next quote'});
        expect( nextButton.disabled ).toBeFalsy();

        fireEvent.click( nextButton );

        expect( mockIncrement ).toHaveBeenCalledTimes(1);

    });  

});