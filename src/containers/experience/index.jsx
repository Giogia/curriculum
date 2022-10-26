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
						<Column gap={8}>
							<div>
								<b>{'Ownerships:'}</b>
								<div>
									<div>
										<span>{'·  mantainer of the graphical components library: '}</span>

										<span className='semi-bold'>{'Storybook '}</span>
										<img src={Storybook} alt='storybook' style={{ height: 12, marginBottom: 2 }} />

										<span className='semi-bold'>{' · Chromatic '}</span>
										<img src={Chromatic} alt='chromatic' style={{ height: 12, marginBottom: 2 }} />

										<span className='semi-bold'>{' · Figma '}</span>
										<img src={Figma} alt='figma' style={{ height: 12, marginBottom: 2 }} />
									</div>
									<div>{'·  owner of the official documentation releases'}</div>
								</div>
							</div>
							<div>
								<b>{'Projects:'}</b>
								<div>
									<span>{'·  Modular backoffice creation: '}</span>
									<span className='semi-bold'>{'Microlc '}</span>
									<img src={MicroLc} alt='microlc' style={{ height: 12, marginBottom: 2 }} />
									<span classNzame='semi-bold'>{' · StencilJS '}</span>
									<img src={StencilJS} alt='stenciljs' style={{ height: 12, marginBottom: 2 }} />
									<span className='semi-bold'>{' · Web Components '}</span>
									<img src={WebComponents} alt='web-components' style={{ height: 12, marginBottom: 2 }} />
									<span className='semi-bold'>{' · Microfrontend'}</span>
								</div>
								<div>
									<span>{'·  Internal Developer Portal development'}</span>
								</div>
								<div>
									<span>{'·  Git Providers integrations: '}</span>
									<span className='semi-bold'>{'Azure DevOps '}</span>
									<img src={Azure} alt='azure' style={{ height: 12, marginBottom: 2 }} />
									<span className='semi-bold'>{' · Bitbucket '}</span>
									<img src={Bitbucket} alt='bitbucket' style={{ height: 12, marginBottom: 2 }} />
								</div>
							</div>
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
			<img src={Gptw} alt='gptw' style={{ position: 'absolute', top: 150, left: 50, height: 60, borderRadius: 4 }} />
			<img src={Gartner} alt='gartner' style={{ position: 'absolute', top: 150, left: 120, height: 60, borderRadius: 4 }} />
		</Card>
		<Row gap={12}>
			<Card
				className='secondary gophing'
				title={{
					text: 'Gophing Around',
					icon: <img src={HashCode} alt='hash-code' />
				}}
			>
				<Column>
					<span>{'99th position @'}</span>
					<span>{'Google Hash-Code 2022'}</span>
				</Column>
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
				<Column>
					<Row gap={8}>
						<span>{'Prototype Development for Honda Motor'}</span>
						<span>{'·'}</span>
						<span>{'Wearable object design'}</span>
					</Row>
					<Row gap={8}>
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