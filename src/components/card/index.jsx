import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Title from '../title'
import './index.css'

const Card = ({ children, className, title, subtitle, extra, style, horizontal = false }) => (
	<div className={classNames(className, 'card')} style={style}>
		{title &&
			<div className='card-header'>
				<Title
					className='card-title'
					badge={title?.badge}
					text={title?.text}
					icon={title?.icon}
					description={subtitle}
				/>
				<div className='card-extra'>
					{extra}
				</div>
			</div>
		}
		<div className='card-content' style={{ flexDirection: horizontal ? 'row' : 'column' }}>
			{children}
		</div>
		{/* <div className='card-background'>
			{title?.icon}
		</div> */}
	</div>
)

Card.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	horizontal: PropTypes.bool,
	title: PropTypes.shape({
		badge: PropTypes.node,
		text: PropTypes.string,
		icon: PropTypes.node
	}),
	subtitle: PropTypes.node,
	extra: PropTypes.node,
	style: PropTypes.object
}

export default Card