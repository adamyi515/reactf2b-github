import React, { useState, useContext, useEffect } from 'react'
import GithubContext from '../../context/github/GithubContext';
import Loading from '../layout/Loading';
import UserItem from './UserItem';

const UserResults = () => {
    const { isLoading, users, fetchUsers } = useContext(GithubContext);

    useEffect(() => {
        fetchUsers();
    }, [])  

    if(!isLoading){
        return (
            <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
                { users.map(user => (
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        )
    } else {
        return (
            <Loading />
        )
    }

}

export default UserResults