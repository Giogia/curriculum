import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './index.css'

const Avatar = ({ children, className, icon }) => (
	<div className={classNames(className, 'avatar')}>
		{icon}
		{children}
	</div>
)

Avatar.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	icon: PropTypes.node
}

export default Avatar