import { combineReducers, createStore } from "redux"
import jobReducer from "../reducers/job"
import favoriteReducer from "../reducers/favorite"
export const initialState = {

    favorite:{
        companies: [],
    },
    job:{
        jobs:[],
    }
    
}

const mainReducer = combineReducers({
    favorite: favoriteReducer,
    job: jobReducer,
})


const configureStore = createStore(
    mainReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default configureStore