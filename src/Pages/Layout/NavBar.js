import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './NavBar.css'

export default class NavBar extends Component {
	render() {
		return (
			<nav className='navBar'>
				<div className='left-title'>My inventory app</div>
				<div className='navbar-container'>
					<div>
						<Link className='navbar-items' to='/'>
							Home{' '}
						</Link>
					</div>
					<div>
						<Link className='navbar-items' to='/product'>
							{' '}
							Product{' '}
						</Link>
					</div>
					<div>
						<Link className='navbar-items' to='/categories'>
							{' '}
							Category{' '}
						</Link>
					</div>
				</div>
			</nav>
		)
	}
}
