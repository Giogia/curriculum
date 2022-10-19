import React from 'react'

import Card from '../../components/card'
import Divider from '../../components/divider'
import Paragraph from '../../components/paragraph'
import Timeline from '../../components/timeline'
import Title from '../../components/title'

import MiaPlatform from '../../assets/Mia-Platform.png'
import Honda from '../../assets/Honda.png'
import Gptw from '../../assets/Gptw.png'
import Gartner from '../../assets/Gartner.png'
import Kubernetes from '../../assets/Kubernetes.png'
import HashCode from '../../assets/Hashcode.png'

import './index.css'

const Experience = () => (
	<Card className='primary experience' title={{ text: 'Experience' }} >
		<Card
			className='secondary'
			title={{
				text: 'Mia Platform',
				icon: <img src={MiaPlatform} key='work' alt='work' />,
			}}
			subtitle={<div>
				{'developing a digital integration hub able to build platforms based on APIs, Microservices and Kubernetes '}
				<img src={Kubernetes} alt='gptw' style={{ height: 14 }} />
			</div>}
			extra='2020 - 2022'
			horizontal
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
						<div style={{ display: 'flex', flexDirection: 'column', gap: 4, height: '100%', justifyContent: 'flex-start' }}>
							<div>
								<b>{'Internal Developer Portal development'}</b>
							</div>
							<div>
								<b>{'Ownership of releasing new company documentation versions'}</b>
							</div>
							<div>
								<b>{'Git Providers integrations: '}</b>
								<span>{'Bitbucket · Docker · Azure DevOps · Gitlab · GitHub'}</span>
							</div>
							<div>
								<b>{'Ownership of graphical components library: '}</b>
								<span>{'Storybook · Chromatic · Figma'}</span>
							</div>
							<div>
								<b>{'Modular backoffice creation: '}</b>
								<span>{'Microfrontend · Microlc · StencilJS · Web Components'}</span>
							</div>
							{/* Microfrontend · Microlc · Bitbucket · MongoDB · Fastify · Ant Design · Docker · Azure DevOps · Gitlab · GitHub · Rego · StencilJS · Web Components · Docusaurus */}
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
						<div style={{ display: 'flex', flexDirection: 'column', gap: 4, height: '100%' }}>
							<div>
								<b>{'Console development: '}</b>
								<span>{'Microservices · Node.js · React.js · Redux.js · Ant Design · TypeScript · Fastify· Test Driven Development · MongoDB · Docusaurus · Docker · Kubernetes'}</span>
							</div>
						</div>
					}
				/>
			</Timeline>
			<img src={Gptw} alt='gptw' style={{ position: 'absolute', top: 150, left: 50, height: 60 }} />
			<img src={Gartner} alt='gartner' style={{ position: 'absolute', top: 150, left: 120, height: 60 }} />
		</Card>
		<div style={{ display: 'flex', gap: 8, width: '100%' }}>
			<Card
				className='secondary'
				title={{
					text: 'Helmate',
					icon: <img src={Honda} alt='prototyping' />
				}}
				subtitle='Prototype Development for Honda Motor'
				extra='May 2018'
			>
				<div style={{ display: 'flex', gap: '8px', width: '100%' }}>
					<div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
						<span>{'Wearable object technological design in a Linux environment.'}</span>
						{/* <span>{'Bone conduction speakers and laryngophone integration'}</span> */}
					</div>
					<Divider />
					<div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
						<span>{'Hands-free voice control with PocketSphinx'}</span>
						{/* <span>{'Bluetooth connectivity implementation with Bluez'}</span> */}
					</div>
				</div>
			</Card>
			<div className='gophing'>
				<Card
					className='secondary'
					title={{
						text: 'Gophing Around',
						icon: <img src={HashCode} alt='hash-code' />
					}}
				>
					<div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
						<span>{'99th position @'}</span>
						<span>{'Google Hash-Code 2022'}</span>
					</div>
				</Card>
			</div>
		</div>
	</Card >
)

export default Experience