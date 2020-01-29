import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
	return (
		<nav className="nav-wrapper red darken-3">
			<div className="container">
				<Link to="/" className="brand-logo">
					React Apps
				</Link>
				<ul id="nav-mobile" className="right">
					<li>
						<NavLink exact to="/">Todos</NavLink>
					</li>
					<li>
						<NavLink to="/bakery">Bakery</NavLink>
					</li>
					<li>
						<NavLink to="/ghdetails">ghdetails</NavLink>
					</li>
					<li>
						<NavLink to="/contacts">Contacts</NavLink>
					</li>
					<li>
						<NavLink to="/posts">Posts</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Header;
