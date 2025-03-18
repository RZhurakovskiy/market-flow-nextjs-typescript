import axios from 'axios'

export const httpServer = axios.create({
	withCredentials: true,
	baseURL: 'https://react-dashboard-3d861-default-rtdb.firebaseio.com',
})
