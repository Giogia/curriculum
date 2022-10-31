import React from 'react'

import Card from '../../components/card'
import Badge from '../../components/badge'
import { Row } from '../../components/flex'

import Android from '../../assets/Android.png'
import FinalCut from '../../assets/FinalCut.png'
import Premiere from '../../assets/Premiere.png'
import Photoshop from '../../assets/Photoshop.png'
import Lightroom from '../../assets/Lightroom.png'

import './index.css'

const Passions = () => (
	<Card className='primary passions' title={{ text: 'Passions' }}>
		<Card className='secondary' style={{padding: '8px 16px', width: 'fit-content'}}>
			<Row gap={16}>
				<span>{'Android Custom ROMs'}</span>
				<img src={Android} alt='android' style={{ height: 14 }} />
				<span>{' · '}</span>
				<span>{'Post Production'}</span>
				<Badge logo={<img src={FinalCut} alt='final-cut' style={{ height: 14 }} />}>
					{'Final Cut Pro'}
				</Badge>
				<Badge logo={<img src={Premiere} alt='adobe-premiere' style={{ height: 14 }} />}>
					{'Premiere Pro'}
				</Badge>
				<Badge logo={<img src={Photoshop} alt='adobe-photoshop' style={{ height: 14 }} />}>
					{'Photoshop'}
				</Badge>
				<Badge logo={<img src={Lightroom} alt='adobe-lightroom' style={{ height: 14 }} />}>
					{'Lightroom'}
				</Badge>
			</Row>
		</Card>
	</Card >
)

export default Passions