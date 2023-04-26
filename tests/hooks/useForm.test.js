import { act, renderHook } from '@testing-library/react';
import { useForm } from '../../src/hooks/useForm'

describe('Pruebas en el useForm', () => { 

    const inialForm = {
        name: 'Fernando',
        email: 'fernando@google.com',
    };

    test('Debe de retornar los valores por defecto', () => { 

        const { result } = renderHook( () => useForm ( inialForm ) );     

        expect(result.current).toEqual({
            name: inialForm.name,
            email: inialForm.email,
            formState: inialForm,    
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function),               
        });
    });  

    test('Debe de cambiar el nombre', () => { 
        const newValue = 'Juan';
        const { result } = renderHook( () => useForm ( inialForm ) );     
        const { onInputChange } = result.current;
 
        act( () => {
            const changedState = {
                name: 'name',
                value: newValue,
            };            
            onInputChange( {target: changedState} );            
        });
        
        expect(result.current.name).toBe(newValue);
        expect(result.current.formState.name).toBe(newValue);
    });

    test('Debe de resetear el formulario', () => { 
        const newValue = 'Juan';
        const { result } = renderHook( () => useForm ( inialForm ) );     
        const { onInputChange, onResetForm } = result.current;
 
        act( () => {
            const changedState = {
                name: 'name',
                value: newValue,
            };            
            onInputChange( {target: changedState} );            
            onResetForm();
        });
        
        expect(result.current.name).toBe(inialForm.name);
        expect(result.current.formState.name).toBe(inialForm.name);
    });


});