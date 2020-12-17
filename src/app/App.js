import {applyMiddleware, compose, createStore} from "redux";
import {Provider as ReduxProvider} from 'react-redux';
import thunk from 'redux-thunk';
import {BrowserRouter} from 'react-router-dom';
import {Routes} from "./Routes";
import {rootReducer} from "../store/rootReducer";

import './App.css';

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk),
);

const store = createStore(rootReducer, enhancer)

function App() {
    return (
        <BrowserRouter>
            <ReduxProvider store={store}>
                <Routes/>
            </ReduxProvider>
        </BrowserRouter>
    );
}

export default App;
