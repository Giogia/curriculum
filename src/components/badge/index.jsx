import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './index.css'

const Badge = ({ children, className, icon, logo }) => (
	<div className={classNames(className, 'badge')}>
		{icon}
		{children}
		{logo}
	</div>
)

Badge.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	icon: PropTypes.node,
	logo: PropTypes.node
}

export default Badge