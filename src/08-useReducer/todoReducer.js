
export const todoReducer = ( initialState = [], action ) => {

  switch ( action.type ) {
    case '[TODO] Add Todo':
      return [ ...initialState, action.payload ];

      case '[TODO] Delete Todo':
        const deletedId = action.payload;
        return initialState.filter( todo => todo.id !== deletedId);

        case '[TODO] Toggle Todo':
          const toggledId = action.payload;
          return initialState.map( (todo) => {            
            if (todo.id === toggledId){
              return {
                ...todo,
                done: !todo.done,              
              };
            }
            return todo;          
          });        
  
    default:
        return initialState;
  }
}
