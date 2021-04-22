require('dotenv').config();

const helpers = {
    greeting() {
        const date = new Date();
        const hr = date.getHours();
        let greeting = '';
            if (hr < 12) {
                greeting = 'Good Morning, my name is Robert Hammock';
            } else if (hr < 18) {
                greeting = 'Good Afternoon, my name is Robert Hammock';
            } else if (hr < 24) {
                greeting = 'Good Evening, my name is Robert Hammock';
            } else {
                greeting = 'Hello, my name is Robert Hammock';
            }
            return greeting;
        },
      
    getRepos() {
        const endpoint = 'https://api.github.com/users/rhammock1/repos?sort=pushed&per_page=100';
        return fetch(endpoint, {
            headers: {
                'authorization': `bearer ${process.env.REACT_APP_API_TOKEN}`,
            }
        })
            .then((res) => (!res.ok) ? res.json().then((error) => error) : res.json())
            .catch((error) => error)
    }
}
export default helpers;