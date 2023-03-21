import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducer/index.jsx"

let initialState = {}
const middleware = [thunk];

let store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)) 
)
export default store;