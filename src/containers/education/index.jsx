import React from 'react'

import Card from '../../components/card'
import Badge from '../../components/badge'
import Paragraph from '../../components/paragraph'
import Timeline from '../../components/timeline'
import Title from '../../components/title'

import Politecnico from '../../assets/Politecnico.png'
import JiaoTong from '../../assets/JiaoTong.png'

import './index.css'

const Education = () => (
	<Card className='primary education' title={{ text: 'Education' }}>
		<Card
			className='secondary'
			title={{
				text: 'Politecnico of Milan',
				icon: <img src={Politecnico} alt='Polimi' />
			}}
			subtitle='Computer and Science Engineering'
			extra='2014 - 2020'
		>
			<Timeline>
				<Paragraph
					title={
						<Title
							text={'Master'}
							description={'Sept 2017 - Sept 2020'}
							size={'medium'}
						/>
					}
					content={
						<Badge>{'109/110'}</Badge>
					}
				/>
				<Paragraph
					title={
						<Title
							text={'Bachelor'}
							description={'Sept 2014 - Sept 2017'}
							size={'medium'}
						/>
					}
					content={
						<Badge>{'99/110'}</Badge>
					}
				/>
			</Timeline>
		</Card>
		<Card
			className='secondary'
			title={{
				text: 'Shanghai JiaoTong',
				icon: <img src={JiaoTong} alt='sjtu' />
			}}
			subtitle='Digital Media and Data Reconstruction Laboratory'
			extra='2018 - 2019'
		>
			<Timeline>
				<Paragraph
					title={
						<Title
							text={'Researcher'}
							description={'Sept 2018 - Jul 2019'}
							size={'medium'}
						/>
					}
					content={
						<Badge>{'GPA: 3.76/4.0'}</Badge>
					}
				/>
			</Timeline>
		</Card>
	</Card>
)

export default Education