import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './index.css'

const Title = ({ text, icon, badge, description, className, size }) => (
	<div>
		<div className={classNames(className, 'title')} style={{ fontSize: size }}>
			{text}
			<div className='title-icon'>
				{icon}
			</div>
			{badge}
		</div>
		{description}
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