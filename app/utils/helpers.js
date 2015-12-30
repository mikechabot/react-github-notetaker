import axios from 'axios'

function getRepos(username) {
	return axios.get(`https://api.github.com/users/${username}/repos?access_token=7c69085116c61df3dcf9d617c60e98556a1507a4`);
}

function getUserInfo(username) {
	return axios.get(`https://api.github.com/users/${username}?access_token=7c69085116c61df3dcf9d617c60e98556a1507a4`);
}

export default function getGithubInfo(username) {
	return axios.all([getRepos(username), getUserInfo(username)])
		.then((arrayOfData) => ({ repos: arrayOfData[0].data, bio: arrayOfData[1].data })
		)
	}

