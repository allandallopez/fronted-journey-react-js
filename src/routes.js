import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import NavBar from './Pages/Layout/NavBar'
import Home from './Pages/Home/Home'
import Product from './Pages/Product/Product'
import Category from './Pages/Category/Category'

class Routes extends Component {
	render() {
		return (
			<Router>
				<NavBar />
				<Switch>
					<Route path='/' component={Home} exact />
					<Route path='/product' component={Product} />
					<Route path='/categories' component={Category} />
				</Switch>
			</Router>
		)
	}
}

export default Routes
