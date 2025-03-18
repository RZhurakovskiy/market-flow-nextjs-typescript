import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
	apiKey: 'AIzaSyCjWM8yimiur78fz9QzZ6G1KeX-FGIrJg8',
	authDomain: 'react-dashboard-3d861.firebaseapp.com',
	projectId: 'react-dashboard-3d861',
	storageBucket: 'react-dashboard-3d861.firebasestorage.app',
	messagingSenderId: '72713500371',
	appId: '1:72713500371:web:dc57dbe76ddc38572a0626',
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
