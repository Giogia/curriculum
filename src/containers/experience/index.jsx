import React from 'react'

import Card from '../../components/card'
import Title from '../../components/title'
import Timeline from '../../components/timeline'
import Paragraph from '../../components/paragraph'

import MiaPlatform from '../../assets/Mia-Platform.png'
import Honda from '../../assets/Honda.png'
import GophingAround from '../../assets/Gophing-Around.png'

import './index.css'

const Experience = () => (
	<Card className='secondary' title={{ text: 'Experience' }} >
		<Card
			className='experience'
			title={{
				text: 'Mia Platform',
				icon: <img src={MiaPlatform} alt='work' />
			}}
			subtitle='Full time work on K8s'
			extra='2020 - 2022'
		>
			<Timeline color='rgba(145, 173, 255, 0.25)'>
				<Paragraph
					title={
						<Title
							text={'Full Stack Developer Expert'}
							description={'Mar 2022'}
							size={'medium'}
						/>
					}
					content={
						<div>
							<b>{'Skills: '}</b>
							<span>{'Microfrontend'}</span>
						</div>
					}
				/>
				<Paragraph
					title={
						<Title
							text={'Full Stack Developer Specialist'}
							description={'Oct 2020'}
							size={'medium'}
						/>
					}
					content={
						<div>
							<b>{'Skills: '}</b>
						</div>
					}
				/>
			</Timeline>
		</Card>
		<div style={{ display: 'flex', gap: '8px', width: '100%' }}>
			<div className='gophing'>
				<Card
					className='experience'
					title={{
						text: 'Gophing Around',
						icon: <img src={GophingAround} alt='hash-code' />
					}}
					extra='April 2022'
				>
					{'99th position at Google Hash-Code 2022'}
				</Card>
			</div>
			<Card
				className='experience'
				title={{
					text: 'Helmate',
					icon: <img src={Honda} alt='prototyping' />
				}}
				subtitle='Prototype Development for Honda Motor'
				extra='May 2018'
			>
				{'test'}
			</Card>
		</div>
	</Card >
)

export default Experience