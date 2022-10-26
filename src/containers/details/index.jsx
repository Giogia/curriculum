import React from 'react'

import { Column } from '../../components/flex'
import Title from '../../components/title'

import './index.css'

const Details = () => (
	<Column className='details' gap={4}>
		<Title className='name' text='Giovanni Tommasi' />
		<span className='job' >{'Software Engineer'}</span>
	</Column>
)

export default Details