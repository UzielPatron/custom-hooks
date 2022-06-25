import { useEffect, useReducer } from "react";
import { toDoReducer } from "../08-useReducer/toDoReducer";

const init = () => {
    return JSON.parse( localStorage.getItem( 'toDos' ) ) || [];
};

export const useToDo = () => {
    const [ toDos, dispatch ] = useReducer( toDoReducer, [], init );

    useEffect(() => {
        localStorage.setItem('toDos', JSON.stringify( toDos ));
    }, [ toDos ]);

    
    const handleNewToDo = ( toDo ) => {
        const action = {
            type: '[TODO] Add ToDo',
            payload: toDo
        };

        dispatch( action );
    };

    const handleRemoveToDo = ( id ) => {
        const action = { 
            type: '[TODO] Remove ToDo',
            payload: id 
        }

        dispatch( action );
    };

    const handleDoneToDo = (id) => {
        const action = { 
            type: '[TODO] Done ToDo',
            payload: id
        };

        dispatch( action );
    };



    return {
        toDos,
        handleNewToDo,
        handleDoneToDo,
        handleRemoveToDo,
        totalToDos: toDos.length,
        pendingToDos: toDos.filter( toDo => !toDo.done ).length,
    };
};
