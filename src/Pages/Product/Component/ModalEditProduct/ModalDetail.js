import React, { Component } from 'react'
import Modal from 'react-modal'
import NumberFormat from 'react-number-format'

export default class ModalDetail extends Component {
	render() {
		const { isShowModal, onClose, data } = this.props
		return (
			<Modal isOpen={isShowModal} onRequestClose={onClose} style={styles} contentLabel='Example Modal'>
				<div style={styles.header}>
					<h1>DETAIL PRODUCT</h1>
				</div>

				<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					<img style={{ width: '14rem', height: '11rem' }} src={this.props.data.imageURL} />
				</div>

				<div style={styles.formInput}>
					<div style={{ ...styles.formTitle, marginRight: '3.3rem' }}>Name : {this.props.data.title}</div>
				</div>

				<div style={styles.formInput}>
					<div style={styles.formTitle}>Description : {data.desc}</div>
				</div>

				<div style={styles.formInput}>
					<div>
						Price : <NumberFormat value={data.price} displayType={'text'} thousandSeparator={true} prefix={'Rp '} />
					</div>
				</div>

				<div style={styles.bottomContainer}>
					<div></div>
					<button onClick={this.props.onClose} style={styles.btnOke}>
						Oke
					</button>
				</div>
			</Modal>
		)
	}
}

const styles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		width: '30rem',
		height: '23rem',
	},

	header: {
		justifyContent: 'center',
		display: 'flex',
	},

	formInput: {
		display: 'flex',
		marginBottom: '1rem',
	},

	formTitle: {
		marginRight: '1rem',
	},

	bottomContainer: {
		display: 'flex',
		justifyContent: 'space-between',
		// marginTop: '4rem',
	},
	btnOke: {
		width: '70px',
		height: '50px',
		cursor: 'pointer',
	},
}
