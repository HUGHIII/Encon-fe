import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) =>
				localStorage.getItem('AUTH_TOKEN') ? (
					<Component {...props} />
				) : (
					<Redirect to='/' />
				)
			}
		/>
	);
};
