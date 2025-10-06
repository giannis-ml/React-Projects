import React, { useContext } from 'react';
import UserContext from '../UserContext';
function Greeting() {
	const { name } = useContext(UserContext);
	return(
		<>
			<div className="container mt-4">
				<div className="card shadow-sm">
					<div className="card-body text-center">
						<h3 className="card-title mb-0">Hello, <span className="text-primary">{name}</span> 👋</h3>
						<p className="text-muted">Welcome back!</p>
					</div>
				</div>
			</div>
		</>

	);
}

export default Greeting;