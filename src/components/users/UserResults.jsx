import React, { useEffect, useState} from 'react'
import Loading from '../layout/Loading';
import UserItem from './UserItem';

const UserResults = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);



    useEffect(() => {
        fetchUsers();
    }, []);

    // Functions ////////////////////////////////////
    const fetchUsers = async () => {
        const res = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
            headers: {
                Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
            }
        });
        const data = await res.json();
        setUsers(data);
        setIsLoading(false);
    }


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