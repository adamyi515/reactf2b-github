import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvder = ({ children }) => {
    const initialState = {
        users:[],
        user: {},
        isLoading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState);

    // Functions ////////////////////////////////////////////////////////////////////
    


    // Clear the query of searched users.
    const clearUsers = () => {
        dispatch({ type: 'CLEAR_USERS' });
    }


    // Show the loading screen.
    const setLoading = () => {
        dispatch({ type: 'SET_LOADING' });
    }

    return(
        <GithubContext.Provider value={{
            ...state,
            dispatch,
            clearUsers
        }}>
            { children }
        </GithubContext.Provider>
    )
}

export default GithubContext;