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
	<Card className='secondary' title={{ text: 'Education' }} horizontal >
		<Card
			className='education'
			title={{
				text: 'Politecnico of Milan',
				icon: <img src={Politecnico} alt='university' />
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
			className='education'
			title={{
				text: 'Shanghai JiaoTong University',
				icon: <img src={JiaoTong} alt='university' />
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
						<div>
							<b>{'Skills: '}</b>
						</div>
					}
				/>
			</Timeline>
		</Card>
	</Card>
)

export default Education