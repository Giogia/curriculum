import React from 'react'

import Badge from '../../components/badge'
import Card from '../../components/card'
import { Column, Row } from '../../components/flex'

import Python from '../../assets/Python.png'
import Pytorch from '../../assets/Pytorch.png'
import Blender from '../../assets/Blender.png'

import './index.css'

const Thesis = () => (
	<Card className='primary research' title={{ text: 'Thesis' }}>
		<Card
			className='secondary thesis'
			title={{ text: 'Neural Volume Rendering' }}
			subtitle='Reconstructing novel viewpoints of realistic tridimensional scenes filmed with multiple depth cameras.'
			extra='April 2022'
		>
			<Column gap={8}>
				<Row gap={8}>
					<span>{'Latent space generation with a Variational Autoencoder'}</span>
				</Row>
				<Row gap={8}>
					<span>{'Environment setup with Python API'}</span>
					<img src={Python} alt='python' style={{ height: 14 }} />					
					<span>{' · '}</span>
					<span>{'Volumetric Raytracing'}</span>
				</Row>
			</Column>
			<Row gap={8}>
				<Badge>
					{'Google Colab'}
				</Badge>
				<Badge logo={<img src={Pytorch} alt='pytorch' style={{ height: 16 }} />}>
					{'Pytorch'}
				</Badge>
				<Badge logo={<img src={Blender} alt='blender' style={{ height: 16 }} />}>
					{'Blender'}
				</Badge>
			</Row>
		</Card>
	</Card >
)

export default Thesis