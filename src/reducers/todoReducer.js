export const initialState = {
    todo: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 1235678,
        },
    ],
};

export const todoReducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE_COMPLETED":
         console.log("Reducer", action);
         return state.map((task) => {
             if (task.id === action.payload) {
                 return { ...task, completed: !task.completed };
             } else {
                 return task;
             }
             
         });
    case "ADD_TODO":
    return [ 
        ...state,
        {
            item: action.payload,
            completed: false,
            id: Date.now(),
        },
    ];
    case  "CLEAR_COMPLETED":
        return state.filter ((task) => !task.completed);
        default:
            return state;
    }
}