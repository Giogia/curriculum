import React from 'react'

import Badge from '../../components/badge'
import Card from '../../components/card'
import { Column, Row } from '../../components/flex'

import RoomPlanner from '../../assets/RoomPlanner.png'
import OpenCV from '../../assets/OpenCV.png'
import FashionMNIST from '../../assets/Fashion-MNIST.png'


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
				<Badge >{'Pytorch'}</Badge>
				<Badge >{'Blender'}</Badge>
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
					icon: <img src={RoomPlanner} alt='prototyping' style={{ filter: 'invert(1)' }} />,
					badge: <Badge>{'WebGL 2.0'}</Badge>
				}}
				extra='Sept 2019'
			>
				{'Graphic engine development for rendering a tridimensional room'}
			</Card>
			<Card
				className='tertiary project'
				title={{
					text: 'Room Reconstruction from a single image',
					icon: <img src={OpenCV} alt='prototyping' />,
					badge: <Badge>{'OpenCV'}</Badge>
				}}
				extra='Sept 2019'
			>
				<Row>
					<Column gap={8}>
						<span>{'Room layout and corners estimation · Depth map estimation · Mesh extrusion · Image decomposition into perspective views'}</span>
						<Row gap={8}>
							<Badge>{'LayoutNet'}</Badge>
							<Badge>{'Numpy-stl'}</Badge>
						</Row>
					</Column>
				</Row>
			</Card>
			<Card
				className='tertiary project'
				title={{
					text: 'Fashion MNIST classification',
					icon: <img src={FashionMNIST} alt='prototyping' style={{ filter: 'invert(1)' }} />,
					badge: <Badge>{'Scikit-Learn'}</Badge>
				}}
				extra='Sept 2019'
			>
				{'Comparison of different machine learning models'}
			</Card>
		</Card>
	</Card >
)

export default Research