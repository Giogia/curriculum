import React from 'react'

import Badge from '../../components/badge'
import Card from '../../components/card'
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
				{'developing a digital integration hub: APIs · Composable Architectures · Kubernetes '}
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
								<b>{'Ownerships:'}</b>
								<div>
									<span>{'managing the official documentation releases'}</span>
									<div>
										<span>{'mantainer of the graphical components library: '}</span>
										<span>{'Storybook · Chromatic · Figma'}</span>
									</div>
								</div>
							</div>
							<div>
								<b>{'Projects:'}</b>
								<div>
									<span>{'Git Providers integrations: '}</span>
									<span>{'Azure DevOps · Bitbucket'}</span>
								</div>
								<div>
									<spa>{'Internal Developer Portal development'}</spa>
								</div>
								<div>
									<span>{'Modular backoffice creation: '}</span>
									<span>{'Microfrontend · Microlc · StencilJS · Web Components'}</span>
								</div>
							</div>
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
								<b>{'Frameworks & Libraries: '}</b>
								<span>{'Node.js · React.js · Redux.js · Ant Design · Fastify'}</span>
							</div>
							<div>
								<b>{'Concepts: '}</b>
								<span>{'Microservices · Test Driven Development'}</span>
							</div>
							<div>
								<b>{'Tools: '}</b>
								<span>{'Gitlab · MongoDB · Docusaurus · Docker · Kubernetes'}</span>
							</div>
							<div>
								<b>{'Languages: '}</b>
								<span>{'Javascript · Typescript'}</span>
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
				className='secondary gophing'
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
			<Card
				className='secondary'
				title={{
					text: 'Helmate',
					icon: <img src={Honda} alt='prototyping' />,
					badge: [
						<Badge className={'helmate'} key={0}>{'Linux'}</Badge>,
						<Badge className={'helmate'} key={1}>{'PocketSphinx'}</Badge>,
						<Badge className={'helmate'} key={2}>{'Bluez'}</Badge>
					]
				}}
				extra='May 2018'
			>
				<div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '0' }}>
					<div style={{ height: '100%', display: 'flex', flexDirection: 'row', gap: '8px' }}>
						<span>{'Prototype Development for Honda Motor'}</span>
						<span>{'·'}</span>
						<span>{'Wearable object design'}</span>
					</div>
					<div style={{ height: '100%', display: 'flex', flexDirection: 'row', gap: '8px' }}>
						<span>{'Bone conduction speakers and laryngophone integration'}</span>
						<span>{'·'}</span>
						<span>{'Hands-free voice control'}</span>
					</div>
				</div>
			</Card>
		</div>
	</Card >
)

export default Experience