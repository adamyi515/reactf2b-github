import { createContext, useState } from "react";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvder = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Functions ////////////////////////////////////
    const fetchUsers = async () => {
        const res = await fetch(`${GITHUB_URL}/users`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        });
        const data = await res.json();
        setUsers(data);
        setIsLoading(false);
    }

    return(
        <GithubContext.Provider value={{
            isLoading,
            users,
            fetchUsers
        }}>
            { children }
        </GithubContext.Provider>
    )
}

export default GithubContext;