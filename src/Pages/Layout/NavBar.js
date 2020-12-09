import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
	render() {
		return (
			<div>
				<div>
					<Link to='/'>Home </Link>
				</div>
				<div>
					<Link to='/product'>Your Product </Link>
				</div>
				<div>
					<Link to='/categories'>The category </Link>
				</div>
			</div>
		)
	}
}
