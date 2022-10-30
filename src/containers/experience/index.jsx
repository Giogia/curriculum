import React from 'react'

import Badge from '../../components/badge'
import Card from '../../components/card'
import Paragraph from '../../components/paragraph'
import Timeline from '../../components/timeline'
import Title from '../../components/title'
import { Column, Row } from '../../components/flex'
import Grid from '../../components/grid'

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
import Linux from '../../assets/Linux.png'
import Bluetooth from '../../assets/Bluetooth.png'

import './index.css'

const Experience = () => (
	<Card className='primary experience' title={{ text: 'Experience' }} >
		<Card
			className='secondary mia'
			title={{
				text: 'Mia Platform',
				icon: <img src={MiaPlatform} key='work' alt='work' />,
			}}
			subtitle={<>
				<span>{'developing a digital integration hub: '}</span>
				<span>{'APIs · Composable Architectures · Kubernetes'}</span>
			</>}
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
						<Column gap={8} style={{ width: '100%' }}>
							<Grid columns='repeat(4, 1fr)' gap={8} style={{ gridAutoRows: 'min-content' }}>
								<Card className='tertiary' style={{ gridColumn: '1/5' }}>
									<b>{'Ownerships:'}</b>
									<Row gap={6}>
										<span>{'Mantainer of the graphical components library: '}</span>
										<span>{'Storybook '}</span>
										<img src={Storybook} alt='storybook' style={{ height: 14 }} />
										<span>{' · '}</span>
										<span>{'Chromatic'}</span>
										<img src={Chromatic} alt='chromatic' style={{ height: 14 }} />
										<span>{' · '}</span>
										<span>{'Figma'}</span>
										<img src={Figma} alt='figma' style={{ height: 14 }} />
									</Row>
									<div>{'Owner of the official documentation releases'}</div>
								</Card>
								<Card className='tertiary' style={{ gridColumn: '1/4' }}>
									<b>{'Projects:'}</b>
									<Row gap={6}>
										<span>{'Modular backoffice creation:'}</span>
										<span>{'Microlc'}</span>
										<img src={MicroLc} alt='microlc' style={{ height: 14 }} />
										<span>{' · '}</span>
										<span>{'StencilJS'}</span>
										<img src={StencilJS} alt='stenciljs' style={{ height: 14 }} />
										<span>{' · '}</span>
										<span>{'Web Components'}</span>
										<img src={WebComponents} alt='web-components' style={{ height: 14 }} />
										<span>{' · '}</span>
										<span>{'Microfrontend'}</span>
									</Row>
									<span>{'Internal Developer Portal development'}</span>
									<Row gap={6}>
										<span>{'Git Providers integrations:'}</span>
										<span>{'Azure DevOps'}</span>
										<img src={Azure} alt='azure' style={{ height: 14 }} />
										<span>{' · '}</span>
										<span>{'Bitbucket'}</span>
										<img src={Bitbucket} alt='bitbucket' style={{ height: 14 }} />
									</Row>
								</Card>
								<Card className='tertiary' style={{ gridColumn: '4/5' }}>
									<b>{'Company Achievements:'}</b>
									<Row gap={8}>
										<img src={Gptw} alt='gptw' style={{ height: 80, margin: 4, borderRadius: 4 }} />
										<img src={Gartner} alt='gartner' style={{ height: 80, margin: 4, borderRadius: 4 }} />
									</Row>
								</Card>
							</Grid>
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
						<Grid columns='1fr 0.5fr' rows='1fr 1fr' gap={8}>
							<Card className='tertiary' >
								<b>{'Frameworks & Libraries: '}</b>
								<Row gap={6}>
									<span>{'Node.js'}</span>
									<img src={NodeJS} alt='nodejs' style={{ height: 14 }} />
									<span>{' · '}</span>
									<span>{'React'}</span>
									<img src={ReactJS} alt='react' style={{ height: 14 }} />
									<span>{' · '}</span>
									<span>{'Redux'}</span>
									<img src={ReduxJS} alt='redux' style={{ height: 14 }} />
									<span>{' · '}</span>
									<span>{'Ant Design'}</span>
									<img src={Ant} alt='ant' style={{ height: 14 }} />
									<span>{' · '}</span>
									<span>{'Fastify'}</span>
									<img src={Fastify} alt='fastify' style={{ height: 14 }} />
								</Row>
							</Card>
							<Card className='tertiary'>
								<b>{'Languages: '}</b>
								<Row gap={6}>
									<span>{'Javascript '}</span>
									<img src={JS} alt='javascript' style={{ height: 14 }} />
									<span>{' · '}</span>
									<span>{'Typescript'}</span>
									<img src={TS} alt='typescript' style={{ height: 14 }} />
								</Row>
							</Card>
							<Card className='tertiary'>
								<b>{'Tools: '}</b>
								<Row gap={6}>
									<span>{'Gitlab '}</span>
									<img src={Gitlab} alt='gitlab' style={{ height: 14 }} />
									<span>{' · '}</span>
									<span>{'MongoDB'}</span>
									<img src={MongoDB} alt='mongodb' style={{ height: 14 }} />
									<span>{' · '}</span>
									<span>{'Docusaurus'}</span>
									<img src={Docusaurus} alt='docusaurus' style={{ height: 14 }} />
									<span>{' · '}</span>
									<span>{'Docker'}</span>
									<img src={Docker} alt='docker' style={{ height: 14 }} />
									<span>{' · '}</span>
									<span>{'Kubernetes'}</span>
									<img src={Kubernetes} alt='kubernetes' style={{ height: 14 }} />
								</Row>
							</Card>
							<Card className='tertiary'>
								<b>{'Concepts: '}</b>
								<Row gap={6}>
									<span>{'Microservices'}</span>
									<span>{' · '}</span>
									<span>{'Test Driven Development'}</span>
								</Row>
							</Card>
						</Grid>
					}
				/>
			</Timeline>
		</Card>
		<Row gap={16}>
			<Card
				className='secondary'
				title={{
					text: 'Helmate',
					icon: <img src={Honda} alt='prototyping' />,
					badge: <Row gap={8} style={{ paddingLeft: 8 }}>
						<Badge className={'helmate'} logo={<img src={Linux} alt='linux' style={{ height: 16 }} />}>
							{'Linux'}
						</Badge>
						<Badge className={'helmate'}>{'PocketSphinx'}</Badge>
						<Badge className={'helmate'} logo={<img src={Bluetooth} alt='bluetooth' style={{ height: 14 }} />}>
							{'Bluez'}
						</Badge>
					</Row>
				}}
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
				</Column>
				<span style={{ position: 'absolute', right: 24, bottom: 16, color: 'grey' }}>{'3360259 pts'}</span>
			</Card>
		</Row>
	</Card >
)

export default Experience