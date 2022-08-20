import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './index.css'

const Paragraph = ({ title, content, className }) => (
	<div className={classNames(className, 'paragraph')}>
		{title}
		{content}
	</div>
)

Paragraph.propTypes = {
	title: PropTypes.node,
	content: PropTypes.node,
	className: PropTypes.string
}

export default Paragraph