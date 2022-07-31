import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './index.css'

const Card = ({ children, className }) => (
	<div className={classNames(className, 'card')}>
		{children}
	</div>
)

Card.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
}

export default Card