 export const initialState ={
    title : '',
    description : '' , 
    price : 0 ,
    category : '',
    tag : [],
    quantity : 0
}

export const formReducer = (state, action) => {
    switch (action.type) {
        case 'change-input':
            return {...state, [action.target.name] : action.target.name};

        case 'add-tag':
            return {...state, tags : [...state.tags , action.data]};

        case 'remove=tag':
            return {...state, tags : state.tags.filter((tag)=> tag !== action.data)};

        case 'increase':
            return {...state , quantity : state.quantity + 1};

        case "decrease":
            return {...state , quantity : state.quantity - 1};
    
        default: return state;
        
    }
}