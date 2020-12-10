import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './NavBar.css'

export default class NavBar extends Component {
	render() {
		return (
			<nav className='navBar'>
				<div className='left-title'>My inventory app</div>
				<div className='navbar-container'>
					<div className='navbar-items'>
						<Link to='/'>Home </Link>
					</div>
					<div className='navbar-items'>
						<Link to='/product'> Product </Link>
					</div>
					<div className='navbar-items'>
						<Link to='/categories'> Category </Link>
					</div>
				</div>
			</nav>
		)
	}
}
