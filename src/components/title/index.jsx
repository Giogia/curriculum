import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './index.css'

const Title = ({ text, className }) => (
	<span className={classNames(className, 'title')}>
		{text}
	</span>
)

Title.propTypes = {
	text: PropTypes.string,
	className: PropTypes.string,
}

export default Title