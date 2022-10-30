import React from 'react'

import Badge from '../../components/badge'
import Card from '../../components/card'
import Paragraph from '../../components/paragraph'
import Timeline from '../../components/timeline'
import Title from '../../components/title'
import { Column, Row } from '../../components/flex'

import MiaPlatform from '../../assets/Mia-Platform.png'
import Honda from '../../assets/Honda.png'
import Gptw from '../../assets/Gptw.png'
import Gartner from '../../assets/Gartner.png'
import Kubernetes from '../../assets/Kubernetes.png'
import HashCode from '../../assets/Hashcode.png'
import Storybook from '../../assets/Storybook.png'
import Chromatic from '../../assets/Chromatic.png'
import Figma from '../../assets/Figma.png'
import MicroLc from '../../assets/MicroLc.png'
import StencilJS from '../../assets/StencilJS.png'
import Azure from '../../assets/Azure.png'
import Bitbucket from '../../assets/Bitbucket.png'
import WebComponents from '../../assets/WebComponents.png'
import NodeJS from '../../assets/NodeJS.png'
import ReactJS from '../../assets/ReactJS.png'
import ReduxJS from '../../assets/ReduxJS.png'
import Ant from '../../assets/Ant.png'
import Fastify from '../../assets/Fastify.png'
import JS from '../../assets/JS.png'
import TS from '../../assets/TS.png'
import Gitlab from '../../assets/Gitlab.png'
import MongoDB from '../../assets/MongoDB.png'
import Docusaurus from '../../assets/Docusaurus.png'
import Docker from '../../assets/Docker.png'

import './index.css'

const Experience = () => (
	<Card className='primary experience' title={{ text: 'Experience' }} >
		<Card
			className='secondary mia'
			title={{
				text: 'Mia Platform',
				icon: <img src={MiaPlatform} key='work' alt='work' />,
			}}
			subtitle={<div>
				<span>{'developing a digital integration hub: '}</span>
				<span className='semi-bold'>{'APIs · Composable Architectures · Kubernetes'}</span>
			</div>}
			extra='2020 - 2022'
			horizontal
		>
			<Timeline>
				<Paragraph
					title={
						<Title
							text={'Full Stack Developer Expert'}
							description={'Mar 2022'}
							size={'medium'}
						/>
					}
					content={
						<Column gap={'0.75em'} style={{ width: '100%' }}>
							<Card className='tertiary'>
								<div className='semi-bold'>{'Ownerships:'}</div>
								<div>
									<span>{'·  mantainer of the graphical components library: '}</span>

									<span>{'Storybook '}</span>
									<img src={Storybook} alt='storybook' style={{ height: 12, marginBottom: 2 }} />

									<span>{' · Chromatic '}</span>
									<img src={Chromatic} alt='chromatic' style={{ height: 12, marginBottom: 2 }} />

									<span>{' · Figma '}</span>
									<img src={Figma} alt='figma' style={{ height: 12, marginBottom: 2 }} />
								</div>
								<div>{'·  owner of the official documentation releases'}</div>
							</Card>
							<Card className='tertiary'>
								<div className='semi-bold'>{'Projects:'}</div>
								<div>
									<span>{'·  Modular backoffice creation: '}</span>
									<span>{'Microlc '}</span>
									<img src={MicroLc} alt='microlc' style={{ height: 12, marginBottom: 2 }} />
									<span>{' · StencilJS '}</span>
									<img src={StencilJS} alt='stenciljs' style={{ height: 12, marginBottom: 2 }} />
									<span>{' · Web Components '}</span>
									<img src={WebComponents} alt='web-components' style={{ height: 12, marginBottom: 2 }} />
									<span>{' · Microfrontend'}</span>
								</div>
								<div>
									<span>{'·  Internal Developer Portal development'}</span>
								</div>
								<div>
									<span>{'·  Git Providers integrations: '}</span>
									<span>{'Azure DevOps '}</span>
									<img src={Azure} alt='azure' style={{ height: 12, marginBottom: 2 }} />
									<span>{' · Bitbucket '}</span>
									<img src={Bitbucket} alt='bitbucket' style={{ height: 12, marginBottom: 2 }} />
								</div>
							</Card>
						</Column>
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
						<div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gridTemplateRows: '1fr 1fr', gap: 8 }}>
							<Card className='tertiary' >
								<span className='semi-bold'>{'Frameworks & Libraries: '}</span>
								<Row gap={6} style={{ alignItems: 'center' }}>
									<span>{'Node.js '}</span>
									<img src={NodeJS} alt='nodejs' style={{ height: 12 }} />
									<span>{' · React '}</span>
									<img src={ReactJS} alt='react' style={{ height: 12 }} />
									<span>{' · Redux '}</span>
									<img src={ReduxJS} alt='redux' style={{ height: 12 }} />
									<span>{' · Ant Design '}</span>
									<img src={Ant} alt='ant' style={{ height: 12 }} />
									<span>{' · Fastify '}</span>
									<img src={Fastify} alt='fastify' style={{ height: 12 }} />
								</Row>
							</Card>
							<Card className='tertiary'>
								<span className='semi-bold'>{'Languages: '}</span>
								<Row gap={6} style={{ alignItems: 'center' }}>
									<span>{'Javascript '}</span>
									<img src={JS} alt='javascript' style={{ height: 12 }} />
									<span>{' · Typescript'}</span>
									<img src={TS} alt='typescript' style={{ height: 12 }} />
								</Row>
							</Card>
							<Card className='tertiary'>
								<span className='semi-bold'>{'Tools: '}</span>
								<Row gap={6} style={{ alignItems: 'center' }}>
									<span>{'Gitlab '}</span>
									<img src={Gitlab} alt='gitlab' style={{ height: 12 }} />
									<span>{' · MongoDB '}</span>
									<img src={MongoDB} alt='mongodb' style={{ height: 12 }} />
									<span>{' · Docusaurus '}</span>
									<img src={Docusaurus} alt='docusaurus' style={{ height: 12 }} />
									<span>{' · Docker '}</span>
									<img src={Docker} alt='docker' style={{ height: 12 }} />
									<span>{' · Kubernetes'}</span>
									<img src={Kubernetes} alt='kubernetes' style={{ height: 12 }} />
								</Row>
							</Card>
							<Card className='tertiary'>
								<span className='semi-bold'>{'Concepts: '}</span>
								<span>{'Microservices · Test Driven Development'}</span>
							</Card>
						</div>
					}
				/>
			</Timeline>
			<div style={{ position: 'absolute', top: 205, right: 40, opacity: 0.95 }} >
				<Row gap={16}>
					<img src={Gptw} alt='gptw' style={{ height: 72, borderRadius: 4 }} />
					<img src={Gartner} alt='gartner' style={{ height: 72, borderRadius: 4 }} />
				</Row>
			</div>
		</Card>
		<Row gap={'1em'}>
			<Card
				className='secondary gophing'
				title={{
					text: 'Gophing Around',
					icon: <img src={HashCode} alt='hash-code' />
				}}
			>
				<Column gap={8}>
					<span>{'99th position @'}</span>
					<span>{'Google Hash-Code 2022'}</span>
					<span style={{ position: 'absolute', right: 24, bottom: 16, color: 'grey' }}>{'3360259 pts'}</span>
				</Column>
			</Card>
			<Card
				className='secondary'
				title={{
					text: 'Helmate',
					icon: <img src={Honda} alt='prototyping' />,
					badge: <Row gap={8} style={{ paddingLeft: 8 }}>
						<Badge className={'helmate'}>{'Linux'}</Badge>
						<Badge className={'helmate'}>{'PocketSphinx'}</Badge>
						<Badge className={'helmate'}>{'Bluez'}</Badge>
					</Row>
				}}
				// subtitle='Prototype Development for Honda Motor'
				extra='May 2018'
			>
				<Column gap={8}>
					<Row gap={16}>
						<span>{'Prototype Development for Honda Motor'}</span>
						<span>{'·'}</span>
						<span>{'Wearable object design'}</span>
					</Row>
					<Row gap={16}>
						<span>{'Bone conduction speakers and laryngophone integration'}</span>
						<span>{'·'}</span>
						<span>{'Hands-free voice control'}</span>
					</Row>
				</Column>
			</Card>
		</Row>
	</Card >
)

export default Experience