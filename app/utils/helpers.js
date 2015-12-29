import axios from 'axios'

function getRepos(username) {
	return axios.get(`https://api.github.com/users/${username}/repos`);
}

function getUserInfo(username) {
	return axios.get(`https://api.github.com/users/${username}`);
}

// Read only
export default function getGithubInfo(username) {
	return axios.all([getRepos(username), getUserInfo(username)])
		.then((arrayOfData) => ({ repos: arrayOfData[0].data, bio: arrayOfData[1].data })
		)
	}

