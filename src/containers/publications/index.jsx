import React from 'react'

import Badge from '../../components/badge'
import Card from '../../components/card'
import { Row, Column } from '../../components/flex'

import Abbot from '../../assets/Abbot.png'
import RaspberryPi from '../../assets/RaspberryPi.png'
import Arduino from '../../assets/Arduino.png'
import CloudVisionAPI from '../../assets/CloudVisionAPI.png'
import Swift from '../../assets/Swift.png'

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
			subtitle='Acceptance paper for AVI 2018 - International Conference on Advanced Visual Interfaces'
			extra='Sept 2017'
		>
			<>
				<Column gap={8}>
					<Row gap={8}>
						<span>{'Object recognition with Google Cloud Vision Api'}</span>
						<img src={CloudVisionAPI} alt='cloud-vision-api' style={{ height: 14 }} />
					</Row>
					<Row gap={16}>
						<Row gap={8} style={{width: 'fit-content'}}>
							<span>{'Swift mobile app'}</span>
							<img src={Swift} alt='swift' style={{ height: 14 }} />
						</Row>
						<span>{'·'}</span>
						<span>{'Exploratory study with 160 kids'}</span>
					</Row>
				</Column>
				<Row gap={16}>
					<Badge
						logo={<img src={RaspberryPi} alt='raspberry' style={{ height: 16 }} />}
					>{'Raspberry Pi'}</Badge>
					<Badge
						logo={<img src={Arduino} alt='arduino' style={{ height: 16 }} />}
					>{'Arduino nano'}</Badge>
				</Row>
			</>
		</Card>
	</Card>
)

export default Publications