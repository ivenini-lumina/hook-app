import { todoReducer } from "../../../src/08-useReducer/todoReducer";


describe('Pruebas en todoReducer', () => {
    
    const initialState = [{
        id: 1,
        description: 'Demo TODO',
        done: false,
    }];

    test('Debe de regresar el estado inicial', () => { 
        const currentState = todoReducer(initialState, {});
        expect (currentState).toBe(initialState);         
    });

    test('Debe de agregar un todo', () => { 
        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'Todo task #2',
                done: false,
            },
        };
        
        const currentState = todoReducer(initialState, {});
        const newState = todoReducer(currentState, action);

        expect (newState.length).toBe(2);      
        expect (newState).toContain(action.payload);    
         
    });

    test('Debe de eliminar un todo', () => { 
        const action = {
            type: '[TODO] Delete Todo',
            payload: 1,            
        };
        
        const currentState = todoReducer(initialState, {});
        const newState = todoReducer(currentState, action);

        expect (newState.length).toBe(0);   
    });

    test('Debe de hacer toggle del todo', () => { 
        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1,            
        };
        
        const currentState = todoReducer(initialState, {});
        
        const newState = todoReducer(currentState, action);
        expect (newState[0].done).toBe( true ); 

        const newState2 = todoReducer(newState, action);
        expect (newState2[0].done).toBe( false );   

    });


})