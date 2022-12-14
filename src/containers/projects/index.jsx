import React from 'react'

import Badge from '../../components/badge'
import Card from '../../components/card'
import { Row, Column } from '../../components/flex'
import Grid from '../../components/grid'

import RoomPlanner from '../../assets/RoomPlanner.png'
import WebGL from '../../assets/WebGL.png'
import OpenCV from '../../assets/OpenCV.png'
import FashionMNIST from '../../assets/Fashion-MNIST.png'
import ScikitLearn from '../../assets/ScikitLearn.png'
import Lorenzo from '../../assets/Lorenzo.png'
import Java from '../../assets/Java.png'
import Tensorflow from '../../assets/Tensorflow.png'

import './index.css'

const Projects = () => (
	<Card className='primary' title={{ text: 'Projects' }}>
		<Card className='secondary projects'>
			<Grid columns='repeat(9, 1fr)' gap={16} style={{ gridAutoRows: 'min-content' }}>
				<Card
					className='tertiary project'
					title={{
						text: 'Room Planner',
						icon: <img src={RoomPlanner} alt='room-planner' style={{ filter: 'invert(1)' }} />,
					}}
					extra='Sept 2019'
					style={{ gridColumn: '1/5' }}
				>
					{'Graphic engine development for rendering an interactive tridimensional room'}
					<Badge logo={<img src={WebGL} alt='scikitlearn' style={{ height: 16 }} />}>
						{'WebGL 2.0'}
					</Badge>
				</Card>
				<Card
					className='tertiary project'
					title={{
						text: 'Fashion MNIST classification',
						icon: <img src={FashionMNIST} alt='fashionmnist' style={{ filter: 'invert(1)' }} />,
					}}
					extra='May 2019'
					style={{ gridColumn: '5/10' }}
				>
					{'Comparison of different machine learning models categorizing clothes'}
					<Row gap={8}>
						<Badge>{'Jupyter Notebook'}</Badge>
						<Badge logo={<img src={ScikitLearn} alt='scikitlearn' style={{ height: 16 }} />}>
							{'Scikit-Learn'}
						</Badge>
					</Row>
				</Card>
				<Card
					className='tertiary project'
					title={{ text: 'Room Reconstruction from a single image' }}
					extra='Sept 2018'
					style={{ gridColumn: '1/7' }}
				>
					<Column gap={2}>
						<Row gap={8}>
							<span>{'Room layout and corners estimation'}</span>
							<span>{' ?? '}</span>
							<span>{'Depth map estimation'}</span>
						</Row>
						<Row gap={8}>
							<span>{'Mesh extrusion'}</span>
							<span>{' ?? '}</span>
							<span>{'Image decomposition into perspective views'}</span>
						</Row>
					</Column>
					<Row gap={8}>
						<Badge>{'LayoutNet'}</Badge>
						<Badge>{'Numpy-stl'}</Badge>
						<Badge logo={<img src={OpenCV} alt='prototyping' style={{ height: 16 }} />}>
							{'OpenCV'}
						</Badge>
					</Row>
				</Card>
				<Card
					className='tertiary project'
					title={{ text: 'Style Transfer' }}
					extra='Dec 2018'
					style={{ gridColumn: '7/10' }}
				>
					{'Optimizing performances of Gatys style transfer architecture'}
					<Badge>{'Convolutional Neural Networks'}</Badge>
				</Card>
				<Card
					className='tertiary project'
					title={{ text: 'SiamFC Object Tracking' }}
					extra='April 2019'
					style={{ gridColumn: '1/6' }}
				>
					{'Implementation and hyperparameter tuning of a real-time object tracking algorithm'}
					<Row gap={8}>
						<Badge>{'Siamese Neural Networks'}</Badge>
						<Badge logo={<img src={Tensorflow} alt='tensor-flow' style={{ height: 16 }} />}>{'TensorFlow'}</Badge>
					</Row>
				</Card>
				<Card
					className='tertiary project'
					title={{
						text: 'Lorenzo il Magnifico',
						icon: <img src={Lorenzo} alt='lorenzo' style={{ height: 20 }} />,
					}}
					extra='July 2017'
					style={{ gridColumn: '6/10' }}
				>
					{'Videogame transposition of a board game using Swing'}
					<Row gap={8}>
						<Badge>{'Cranio Creations'}</Badge>
						<Badge logo={<img src={Java} alt='java' style={{ height: 16 }} />}>
							{'Java'}
						</Badge>
					</Row>
				</Card>
			</Grid>
		</Card >
	</Card >
)

export default Projects