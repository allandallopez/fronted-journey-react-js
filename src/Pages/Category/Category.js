import React from 'react'

import './Category.css'
import { ReactComponent as CategorySvg } from '../../Assets/Images/category-background.svg'
export default class Category extends React.Component {
	render() {
		return (
			<div className='container'>
				<div className='header-container'>
					<div className='top-title'>CATEGORY SCREEN</div>
				</div>

				<div className='background'>
					<CategorySvg />
				</div>
			</div>
		)
	}
}
