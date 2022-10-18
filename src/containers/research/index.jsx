import React from 'react'

import Badge from '../../components/badge'
import Card from '../../components/card'

import Abbot from '../../assets/Abbot.png'
import RoomPlanner from '../../assets/RoomPlanner.png'


import './index.css'

const Research = () => (
	<Card className='secondary' title={{ text: 'Research' }} horizontal>
		<Card
			className='research'
			title={{
				text: 'Neural Volume Rendering',
			}}
			subtitle='Thesis'
			extra='April 2022'
		>
			<span>{'reconstructing novel viewpoints of realistic tridimensional scenes filmed with multiple depth cameras.'}</span>
			<div style={{ display: 'flex', gap: 8, height: 'fit-content', paddingTop: 8, minWidth: 0 }}>
				<Badge >{'Variational Autoencoder'}</Badge>
				<Badge >{'Pytorch'}</Badge>
				<Badge >{'Blender'}</Badge>
			</div>
		</Card>
		<div style={{ display: 'flex', flexDirection: 'column', gap: 16, height: 'fit-content' }}>
			<Card
				className='test-transparent'
				title={{
					text: 'Room Planner',
					icon: <img src={RoomPlanner} alt='prototyping' style={{ filter: 'invert(1)' }} />,
					badge: <Badge style={{ color: 'red' }} >{'WebGL'}</Badge>
				}}
				extra='Sept 2019'
			>
				{'Graphic framework for rendering an interactive room'}
			</Card>
			<Card
				className='test-transparent'
				title={{
					text: 'Abbot',
					icon: <img src={Abbot} alt='prototyping' style={{ filter: 'invert(1)' }} />,
					badge: <Badge >{'Raspberry Pi'}</Badge>
				}}
				extra='Sept 2017'
			>
				{'Acceptance paper for AVI 2018 International Conference on Advanced Visual Interfaces'}
			</Card>
		</div>
	</Card >
)

export default Research