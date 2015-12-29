var axios = require('axios');

function getRepos(username) {
	return axios.get('https://api.github.com/users/' + username + '/repos');
}

function getUserInfo(username) {
	return axios.get('https://api.github.com/users/' + username);
}

var helpers = {
	getGithubInfo: function(username) {
		// Aggregate promises
		return axios.all([getRepos(username), getUserInfo(username)])
			.then(function(arrayOfData) {
				return {
					repos: arrayOfData[0].data,
					bio: arrayOfData[1].data
				}
			})
	}
}

module.exports = helpers;