import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import '../index.css'

const Row = ({ children, className, gap = 0, style }) => (
	<div className={classNames(className, 'flex-row')} style={{gap, ...style}}>
		{children}
	</div>
)

Row.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	gap: PropTypes.number,
	style: PropTypes.object
}

export default Row