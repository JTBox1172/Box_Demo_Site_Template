export const publicRoutes = [
	{
		path: "/admin/login",
		element: <div>login page</div>,
	},
	{
		path: "/",
		element: <div>I'm the application root</div>,
	},
];

export const authProtectedRoutes = [{ path: "/admin/test", element: <div>I'm here for funsies</div> }];
