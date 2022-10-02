import React from "react";

const Login = () => {
	return (
		<div className="login_container">
			<form action="" className="form_container">
				<div className="login_heading">
               <h1>Login Page</h1>
            </div>
				<div className="login_input">
               <div className="form-input">
                  <input type="text" placeholder="Enter username" />
               </div>
               <div className="form-input">
                  <input type="password" placeholder="Enter password" />
               </div>
               <div className="form-input">
                  <input type="button" value="Login" placeholder="Enter password" />
               </div>
            </div>
			</form>
		</div>
	);
};

export default Login;
