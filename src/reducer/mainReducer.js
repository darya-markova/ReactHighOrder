const initialState = {
    items: [1,2,3,4],
    surname: 'Darya Markova'
};

export const mainReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INIT_ACTION':
            console.log('INIT_ACTION', action.value);
            return {
                ...state,
                items: [...state.items, action.value]
            };
        default:
            return state;
    }
};