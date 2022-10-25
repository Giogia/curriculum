import React from 'react'

import Badge from '../../components/badge'
import Card from '../../components/card'

import Abbot from '../../assets/Abbot.png'

import './index.css'

const Publications = () => (
	<Card
		className='primary publications'
		title={{
			text: 'Publications',
		}}
	>
		<Card
			className='secondary project'
			title={{
				text: 'Abbot',
				icon: <img src={Abbot} alt='prototyping' style={{ filter: 'invert(1)' }} />,
				badge: <Badge >{'Raspberry Pi'}</Badge>
			}}
			extra='Sept 2017'
		>
			{'Acceptance paper for AVI 2018 International Conference on Advanced Visual Interfaces'}
		</Card>
	</Card>
)

export default Publications