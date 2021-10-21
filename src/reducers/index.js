import { initialState } from "../store"



const reducer = (state=initialState, action) => {
    switch(action.type){
        case 'ADD_COMPANY_TO_FAVORITE':{

            return {
                ...state,
                favorite: {
                    ...state.favorite,
                    companies:[...state.favorite.companies, action.payload]
                }
            }
        }
        case 'REMOVE_COMPANY_FROM_FAVORITE':{
            return {
                ...state,
                favorite:{
                    ...state.favorite,
                    companies:[...state.favorite.companies.slice(0, action.payload),...state.favorite.companies.slice(action.payload + 1)]
                }
            }
        }
        default:
            return state
    }
}

export default reducer