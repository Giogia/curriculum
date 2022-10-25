import React from 'react'

import Badge from '../../components/badge'
import Card from '../../components/card'

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
			<div style={{ display: 'flex', gap: 8, height: 'fit-content', paddingTop: 8, minWidth: 0 }}>
				<Badge >{'Variational Autoencoder'}</Badge>
				<Badge >{'Pytorch'}</Badge>
				<Badge >{'Blender'}</Badge>
			</div>
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
					icon: <img src={OpenCV} alt='prototyping' style={{ filter: 'invert(1)' }} />,
				}}
				extra='Sept 2019'
			>
				<div style={{ display: 'flex', flexDirection: 'column', height: 'fit-content', minWidth: 0 }}>
					<div style={{ display: 'flex', flexDirection: 'row', gap: 8, height: 'fit-content', minWidth: 0 }}>
						{'Room layout and corners estimation'}
						<Badge key={0}>{'LayoutNet'}</Badge>
					</div>
					<div style={{ display: 'flex', flexDirection: 'row', gap: 8, height: 'fit-content', minWidth: 0 }}>
						{'Image decomposition into perspective views'}
						<Badge key={1}>{'OpenCV'}</Badge>
					</div>
					<div style={{ display: 'flex', flexDirection: 'row', gap: 8, height: 'fit-content', minWidth: 0 }}>
						{'Depth map estimation · Mesh extrusion'}
						<Badge key={2}>{'Numpy-stl'}</Badge>
					</div>
				</div>
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