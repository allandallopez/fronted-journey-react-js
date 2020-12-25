import React from 'react'
import NumberFormat from 'react-number-format'

import './Product.css'
import ModalDetail from './Component/ModalEditProduct/ModalDetail'

export default class Product extends React.Component {
	state = {
		product: {
			data: [
				{
					id: 1,
					title: 'Laptop',
					price: 10000,
					desc: 'steve jobs dreams',
					imageURL: 'https://cdn.pocket-lint.com/r/s/970x/assets/images/152137-laptops-review-apple-macbook-pro-2020-review-image1-qy49zfkn53-jpg.webp',
				},
				{
					id: 2,
					title: 'Keyboard',
					price: 100000,
					desc: 'Kechron k2 the comfy keyboard ever',
					imageURL: 'https://dominico.id/wp-content/uploads/2020/06/photo6280801148667538149-e1592060630412-1024x768.jpg',
				},
				{
					id: 3,
					title: 'Mouse',
					price: 100000,
					desc: 'Razer Naga Trinity',
					imageURL: 'https://i.rtings.com/images/reviews/mouse/razer/naga-trinity/naga-trinity-design-large.jpg',
				},
			],
		},
		isShowModal: false,
		previewData: {},
	}

	changeState = (param) => {
		this.setState(param)
	}

	render() {
		const { product, isShowModal, previewData } = this.state
		return (
			<div className='container'>
				<div className='header-container'>
					<div className='top-title'>MY PRODUCT</div>
				</div>

				<div className='item-container'>
					{product.data.map((item) => (
						<div className='item-card'>
							<img className='img-items' src={item.imageURL} />
							<div className='item-card-bottom'>
								<div className='title-items'>{item.title}</div>
								{/* <div className='mid-title'>{item.desc}</div> */}
								<div className='bottom-container'>
									<NumberFormat value={item.price} displayType={'text'} thousandSeparator={true} prefix={'Rp '} />
									<button onClick={() => this.setState({ previewData: item }, () => this.setState({ isShowModal: true }))}>Show Detail</button>
								</div>
							</div>
						</div>
					))}
				</div>

				<ModalDetail data={previewData} isShowModal={isShowModal} onClose={() => this.setState({ isShowModal: false })} />
			</div>
		)
	}
}
