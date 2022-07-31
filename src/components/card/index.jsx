import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Title from '../title'
import './index.css'

const Card = ({ children, className, title }) => (
	<div className={classNames(className, 'card')}>
		<Title className='card-title' text={title}/>
		{children}
	</div>
)

Card.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	title: PropTypes.node
}

export default Card