import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Title from '../title'
import './index.css'

const Card = ({ children, className, title, subtitle, extra }) => (
	<div className={classNames(className, 'card')}>
		<div className='card-header'>
			<Title
				className='card-title'
				text={title?.text}
				icon={title?.icon}
				description={subtitle}
			/>
			<div className='card-extra'>
				{extra}
			</div>
		</div>
		<div className='card-content'>
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
	title: PropTypes.shape({
		text: PropTypes.string,
		icon: PropTypes.node
	}),
	subtitle: PropTypes.node,
	extra: PropTypes.node
}

export default Card