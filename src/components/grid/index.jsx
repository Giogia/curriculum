import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './index.css'

const Grid = ({ children, className, gap = 0, rows, columns, style }) => (
	<div className={classNames(className, 'grid')} style={{
		gap,
		gridTemplateRows: rows,
		gridTemplateColumns: columns,
		...style
	}}>
		{children}
	</div>
)

Grid.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	gap: PropTypes.number,
	rows: PropTypes.string,
	columns: PropTypes.string,
	style: PropTypes.object
}

export default Grid