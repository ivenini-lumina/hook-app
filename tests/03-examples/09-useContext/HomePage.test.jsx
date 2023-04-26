import { render, screen } from "@testing-library/react";
import { UserContext } from "../../../src/09-useContext/context/UserContext";

import { HomePage } from "../../../src/09-useContext/HomePage";

describe('Pruebas en <HomePage />', () => { 

    const user = {
        id: 1,
        name: 'Fernando',
    };
        
    test('Debe mostrar el componente SIN el usuario', () => { 
        render(
            <UserContext.Provider value={{user: null}}>
                <HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toBe('null');        
    }); 
    
    test('Debe mostrar el componente CON el usuario', () => { 
        render(
            <UserContext.Provider value={{user: user}}>
                <HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        // console.log(`Pre tag: ${preTag.innerHTML}`);
        expect( preTag.innerHTML ).toContain(user.name);        
        expect( preTag.innerHTML ).toContain(user.id.toString());        
    });    
    
});

