import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './index.css'

const Divider = ({ className }) => (
	<div className={classNames(className, 'divider')} />
)

Divider.propTypes = {
	title: PropTypes.node,
	content: PropTypes.node,
	className: PropTypes.string
}

export default Divider