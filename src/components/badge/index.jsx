import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './index.css'

const Badge = ({ children, className, icon }) => (
	<div className={classNames(className, 'badge')}>
		{icon}
		{children}
	</div>
)

Badge.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	icon: PropTypes.node
}

export default Badge