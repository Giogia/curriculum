import React from 'react'

import Badge from '../../components/badge'
import Card from '../../components/card'
import { Column, Row } from '../../components/flex'

import Pytorch from '../../assets/Pytorch.png'
import Blender from '../../assets/Blender.png'
import RoomPlanner from '../../assets/RoomPlanner.png'
import WebGL from '../../assets/WebGL.png'
import OpenCV from '../../assets/OpenCV.png'
import FashionMNIST from '../../assets/Fashion-MNIST.png'
import ScikitLearn from '../../assets/ScikitLearn.png'

import './index.css'

const Research = () => (
	<Card className='primary research' title={{ text: 'Research' }}>
		<Card
			className='secondary thesis'
			title={{
				text: 'Neural Volume Rendering',
			}}
			subtitle='Thesis'
			extra='April 2022'
		>
			<span>{'reconstructing novel viewpoints of realistic tridimensional scenes filmed with multiple depth cameras.'}</span>
			<Row gap={8}>
				<Badge >{'Variational Autoencoder'}</Badge>
				<Badge
					logo={<img src={Pytorch} alt='pytorch' style={{ height: 16 }} />}
				>{'Pytorch'}</Badge>
				<Badge
					logo={<img src={Blender} alt='blender' style={{ height: 16 }} />}
				>{'Blender'}</Badge>
			</Row>
		</Card>
		<Card
			className='secondary projects'
			title={{
				text: 'Projects',
			}}
		>
			<Card
				className='tertiary project'
				title={{
					text: 'Room Planner',
					icon: <img src={RoomPlanner} alt='room-planner' style={{ filter: 'invert(1)' }} />,
					badge:
						<Badge
							logo={<img src={WebGL} alt='scikitlearn' style={{ height: 16 }} />}
						>{'WebGL 2.0'}</Badge>
				}}
				extra='Sept 2019'
			>
				{'Graphic engine development for rendering a tridimensional room'}
			</Card>
			<Card
				className='tertiary project'
				title={{
					text: 'Room Reconstruction from a single image',
					badge:
						<Badge
							logo={<img src={OpenCV} alt='prototyping' style={{ height: 16 }} />}
						>{'OpenCV'}</Badge>
				}}
				extra='Sept 2019'
			>
				<Column gap={16}>
					<Column gap={8}>
						<Row gap={8}>
							<span>{'Room layout and corners estimation'}</span>
							<span>{' · '}</span>
							<span>{'Depth map estimation'}</span>
						</Row>
						<Row gap={8}>
							<span>{'Mesh extrusion'}</span>
							<span>{' · '}</span>
							<span>{'Image decomposition into perspective views'}</span>
						</Row>
					</Column>
					<Row gap={8}>
						<Badge>{'LayoutNet'}</Badge>
						<Badge>{'Numpy-stl'}</Badge>
					</Row>
				</Column>
			</Card>
			<Card
				className='tertiary project'
				title={{
					text: 'Fashion MNIST classification',
					icon: <img src={FashionMNIST} alt='fashionmnist' style={{ filter: 'invert(1)' }} />,
					badge:
						<Badge
							logo={<img src={ScikitLearn} alt='scikitlearn' style={{ height: 16 }} />}
						>{'Scikit-Learn'}</Badge>
				}}
				extra='Sept 2019'
			>
				{'Comparison of different machine learning models'}
			</Card>
		</Card>
	</Card >
)

export default Research