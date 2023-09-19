import { useSelector } from 'react-redux';
import { login, logout } from '../state/auth/action';
import { useAppDispatch, useAppSelector } from '../store';
import { useCallback, useState } from 'react';

export const useAuth = (username, password) => {
	const dispatch = useAppDispatch();
	const [requestLogin, setRequestLogin] = useState(false);
	// const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

	const handleLogin = useCallback(() => {
		// Gọi action login và truyền thông tin người dùng

		if (username === 'admin' && password === '1') {
			// Dispatch action login với thông tin người dùng
			dispatch(login({ username }));
			// Reset form
			setRequestLogin(true);
		}
		else setRequestLogin(false);
	},[dispatch, password, username])

	const handleLogout = () => {
		// Dispatch action logout
		dispatch(logout());
	};

	return {
		handleLogin,
		handleLogout,
		requestLogin
	}
}