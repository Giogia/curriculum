import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { Timeline as AntTimeline } from 'antd'

import './index.css'

const { Item } = AntTimeline

const Timeline = ({ children, color, className }) => (
	<AntTimeline className={classNames(className, 'timeline')}>
		{Array.isArray(children) ?
			children.map((child, index) => (
				<Item color={color} key={index}>
					{child}
				</Item>
			)) : 
			<Item color={color}>
				{children}
			</Item>}
	</AntTimeline>
)

Timeline.propTypes = {
	children: PropTypes.node,
	color: PropTypes.string,
	className: PropTypes.string
}

export default Timeline