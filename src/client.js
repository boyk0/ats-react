import axios from 'axios';

export const url = process.env.API_ENDPOINT || 'http://localhost:3001/'

export const axiosClient = axios.create();

axiosClient.interceptors.request.use((config) => {
	return {
		...config,
		headers: {
			...config?.headers,
			authorization: localStorage.getItem('user'),
		},
	}
})
axiosClient.interceptors.response.use(function (response) {
	return response;
}, function (error) {
	if (401 === error.response.status) {
		localStorage.setItem('user', null)
		window.location = '/login';
	} else {
		return Promise.reject(error);
	}
});


