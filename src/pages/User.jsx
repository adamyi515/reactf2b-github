import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import GithubContext from '../context/github/GithubContext'
import { getUser } from '../context/github/GithubActions'


const User = () => {
    const params = useParams();
    const { user, dispatch } = useContext(GithubContext);

    useEffect(() => {
        dispatch({ type: 'SET_LOADING' });
        getUserData();
    }, []);

    const getUserData = async () => {
        const user = await getUser(params.login);
        
        dispatch({
            type: 'GET_USER',
            payload: user
        })
    }


    return (
        <div>
            { user.login }
        </div>
    )
}

export default User