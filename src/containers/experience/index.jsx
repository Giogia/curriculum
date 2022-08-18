import React from 'react'

import Card from '../../components/card'
import MiaPlatform from '../../assets/Mia-Platform.png'

import './index.css'

const Experience = () => (
	<Card className='secondary' title={{text:'Experience'}} >
		<Card
			className='tertiary'
			title={{
				text: 'Mia Platform',
				icon: <img src={MiaPlatform} alt='work' />
			}}
			extra='2020/2022'>
			{'test'}
		</Card>
		<Card
			className='tertiary'
			title={{
				text: 'Helmate',
			}} >
			{'test'}
		</Card>
	</Card>
)

export default Experience