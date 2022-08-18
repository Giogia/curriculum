import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './index.css'

const Title = ({ text, icon, className }) => (
	<span className={classNames(className, 'title')}>
		{text}
		<div className='title-icon'>
			{icon}
		</div>
	</span>
)

Title.propTypes = {
	text: PropTypes.string,
	icon: PropTypes.node,
	className: PropTypes.string,
}

export default Title