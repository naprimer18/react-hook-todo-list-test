const defaultData = {
    list:[]
} 
export default function getData(state = defaultData,action) {
    switch(action.type) {
        case 'ADD_ITEM': {
            
            return {...state,list:[...state.list, action.payload]}
        }
        case 'DELET_ITEM': {
            return {...state,list: [...state.list.slice(0,action.payload),...state.list.slice(action.payload+1)]}
        }
        default : return state;
    }
}