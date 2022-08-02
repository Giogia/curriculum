import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { UserOutlined } from '@ant-design/icons'

import './index.css'

const px = (number) => `${number}px`

const Avatar = ({ className, size = 128 }) => (
	<div className={classNames(className, 'avatar')}
		style={{
			height: px(size),
			width: px(size)
		}}>
		<UserOutlined style={{
			fontSize: size/2
		}} />
	</div>
)

Avatar.propTypes = {
	className: PropTypes.string,
	size: PropTypes.string,
}

export default Avatar