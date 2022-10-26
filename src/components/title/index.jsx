import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './index.css'

const Title = ({ text, icon, badge, description, className, size }) => (
	<div className={classNames(className, 'title')} style={{ fontSize: size }}>
		<div className='title-content'>
			<div className='title-text'>
				{text}
			</div>
			<div className='title-icon'>
				{icon}
			</div>
			{badge}
		</div>
		<div className='title-description'>
			{description}
		</div>
	</div>
)

Title.propTypes = {
	badge: PropTypes.node,
	text: PropTypes.string,
	description: PropTypes.string,
	icon: PropTypes.node,
	className: PropTypes.string,
	size: PropTypes.string
}

export default Title