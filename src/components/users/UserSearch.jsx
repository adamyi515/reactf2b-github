import React, { useState, useContext } from 'react'
import GithubContext from '../../context/github/GithubContext';

const UserSearch = () => {
    const [text, setText] = useState('');
    const { users } = useContext(GithubContext);

    // Functions//////////////////////////////////////////////////////////////////////////////////
    const handleTextChange = ev => {
        setText(ev.target.value);
    }

    const handleSubmit = ev => {
        ev.preventDefault();
        if(text.length === 0){
            alert('Please enter characters');
        } else {
            console.log('Submitted');
        }
    }

    return (
        <div className='user-search'>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <input type='text' placeholder='Search...' onChange={handleTextChange} value={text} />
                    <button type='submit' className='btn btn-primary'>GO</button>
                    {users.length > 0 && (
                        <button type='submit' className='btn btn-primary'>CLEAR</button>
                    )}
                </div>
            </form>
        </div>
    )
}

export default UserSearch