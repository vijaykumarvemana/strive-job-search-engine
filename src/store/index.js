import { createStore } from "redux"
import reducer from "../reducers"
export const initialState = {

    favorite:{
        companies: []
    }
}


const configureStore = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default configureStore