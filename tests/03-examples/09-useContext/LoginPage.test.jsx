import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../../src/09-useContext/context/UserContext";

import { LoginPage } from "../../../src/09-useContext/LoginPage";

describe('Pruebas en <LoginPage />', () => { 
        
    test('Debe mostrar el componente SIN el usuario', () => { 
        render(
            <UserContext.Provider value={{user: null}}>
                <LoginPage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toBe('null');        
    }); 
    
    test('Debe de llamar el setUser cuando se hace click en el boton', () => { 
        // TODOOOOOOO

        const mockSetUser = jest.fn();

        render(
            <UserContext.Provider value={{user: null, setUser: mockSetUser}}>
                <LoginPage />
            </UserContext.Provider>
        );

        const btn = screen.getByRole('button');
        
        fireEvent.click( btn );

        const setUserExpectedArgs = {id: 123, name: 'Juan', email: 'juan@google.com'};

        expect (mockSetUser).toHaveBeenCalledWith(setUserExpectedArgs);
    });    
    
});

