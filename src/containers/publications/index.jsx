import React from 'react'

import Badge from '../../components/badge'
import Card from '../../components/card'

import Abbot from '../../assets/Abbot.png'
import RaspberryPi from '../../assets/RaspberryPi.png'

import './index.css'

const Publications = () => (
	<Card
		className='primary publications'
		title={{
			text: 'Publications',
		}}
	>
		<Card
			className='secondary'
			title={{
				text: 'Abbot',
				icon: <img src={Abbot} alt='abbot' style={{ filter: 'invert(1)' }} />,
			}}
			extra='Sept 2017'
		>
			<>
				{'Acceptance paper for AVI 2018 International Conference on Advanced Visual Interfaces'}
				<Badge 
					logo={<img src={RaspberryPi} alt='raspberry' style={{ height: 16 }} />}
				>{'Raspberry Pi'}</Badge>
			</>
		</Card>
	</Card>
)

export default Publications