const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

// Search for users in github and bring back a list of users.
export const searchUsers = async (text) => {
    const params = new URLSearchParams({
        q: text
    })

    const res = await fetch(`${GITHUB_URL}/search/users?${params}`, {
        headers: {
            Authorization: `token ${GITHUB_TOKEN}`
        }
    });
    
    const data = await res.json();

    return data.items;
}


// Get single user.
export const getUser = async (username) => {
    const res = await fetch(`${GITHUB_URL}/users/${username}`, {
        headers: {
            Authorization: `token ${GITHUB_TOKEN}`
        }
    });

    if(res.status === 404){
        window.location = '/notfound'
    } else {
        const data = await res.json(); 
        return data;
    }

}