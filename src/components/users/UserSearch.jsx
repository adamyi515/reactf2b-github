import React, { useState, useContext } from 'react'
import GithubContext from '../../context/github/GithubContext';
import AlertContext from '../../context/alert/AlertContext';
import { searchUsers } from '../../context/github/GithubActions'; 

const UserSearch = () => {
    const [text, setText] = useState('');
    const { users, dispatch, clearUsers } = useContext(GithubContext);
    const { alert, setAlert } = useContext(AlertContext);

    // Functions//////////////////////////////////////////////////////////////////////////////////
    const handleTextChange = ev => {
        setText(ev.target.value);
    }

    const handleSubmit = async ev => {
        ev.preventDefault();
        if(text.length === 0){
            setAlert('You must enter something in the textbox to make a query', 'TEST')
        } else {
            dispatch({
                type: 'SET_LOADING'
            });

            const getUsers = await searchUsers(text);
            
            dispatch({
                type: 'GET_USERS',
                payload: getUsers
            });

        }
    }

    const handleClearSubmit = ev => {
        clearUsers();
    }

    return (
        <div className='user-search'>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <input type='text' placeholder='Search...' onChange={handleTextChange} value={text} />
                    <button type='submit' className='btn btn-primary'>GO</button>
                    {users.length > 0 && (
                        <button type='submit' className='btn btn-primary' onClick={handleClearSubmit}>CLEAR</button>
                    )}
                </div>
                {alert && (
                    <h1>{ alert.msg }</h1>
                )}
            </form>
        </div>
    )
}

export default UserSearch