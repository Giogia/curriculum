import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { UserOutlined } from '@ant-design/icons'

import './index.css'

const px = (number) => `${number}px`

const Avatar = ({ className, icon, size = 128 }) => (
	<>
		<div className={classNames(className, 'avatar')}
			style={{
				height: px(size),
				width: px(size)
			}}>
			{icon ?
				<img src={icon} alt="avatar" style={{ width: size }} /> :
				<UserOutlined style={{ fontSize: size / 2 }} />
			}
		</div>
		<div className='avatar-shadow' style={{ height: size, width: size }} />
	</>
)

Avatar.propTypes = {
	className: PropTypes.string,
	icon: PropTypes.node,
	size: PropTypes.string,
}

export default Avatar