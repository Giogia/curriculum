import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'


import './index.css'

const Timeline = ({ children, className }) => (
	<ul className={classNames(className, 'timeline')}>
		{Array.isArray(children) ?
			children.map((child, index) => (
				<Item key={index}>
					{child}
				</Item>
			)) :
			<Item>
				{children}
			</Item>}
	</ul>
)

Timeline.propTypes = {
	children: PropTypes.node,
	color: PropTypes.string,
	className: PropTypes.string
}

export default Timeline

const Item = ({ children }) => (
	<li className={'timeline-item'}>
		{children}
	</li>
)

Item.propTypes = {
	children: PropTypes.node
}

