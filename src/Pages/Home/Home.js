import React, { Component } from 'react'

import './Home.css'
import { ReactComponent as HomeSvg } from '../../Assets/Images/home-background.svg'

export default class Home extends Component {
	render() {
		return (
			<div className='container'>
				<div className='header-container'>
					<div className='top-title'>HOME SCREEN</div>
				</div>

				<div className='background'>
					<HomeSvg />
				</div>
			</div>
		)
	}
}
