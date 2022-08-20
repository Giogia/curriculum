import React from 'react'

import Card from '../../components/card'

import Abbot from '../../assets/Abbot.png'

import './index.css'

const Research = () => (
	<Card className='secondary' title={{ text: 'Research' }} >
		<div style={{ display: 'flex', gap: '8px', width: '100%' }}>
			<Card
				className='research'
				title={{
					text: 'Neural Volume Rendering',
				}}
				subtitle='Thesis'
				extra='April 2022'
			>
				{'test'}
			</Card>
			<Card
				className='research'
				title={{
					text: 'Abbot',
					icon: <img src={Abbot} alt='prototyping' style={{filter: 'invert(1)'}}/>
				}}
				subtitle='Acceptance paper for AVI 2018 International Conference on Advanced Visual Interfaces'
				extra='Sept 2017'
			>
				{'test'}
			</Card>
		</div>
	</Card >
)

export default Research