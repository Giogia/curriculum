import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './index.css'

const Paragraph = ({ title, content, className }) => (
	<div className={classNames(className, 'paragraph')}>
		<div className='paragraph-title'>
			{title}
		</div>
		<div className='paragraph-content'>
			{content}
		</div>
	</div>
)

Paragraph.propTypes = {
	title: PropTypes.node,
	content: PropTypes.node,
	className: PropTypes.string
}

export default Paragraph