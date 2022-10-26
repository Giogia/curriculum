import React from 'react'
import { PhoneOutlined, MailOutlined, GithubOutlined, LinkedinOutlined } from '@ant-design/icons'

import Badge from '../../components/badge'
import { Row } from '../../components/flex'

import './index.css'

const Contacts = () => (
	<Row className='contacts' gap={12}>
		<Badge icon={<MailOutlined />}>{'giovannitommasi95@gmail.com'}</Badge>
		<Badge icon={<PhoneOutlined />}>{'3924004397'}</Badge>
		<Badge icon={<GithubOutlined />}>{'@Giogia'}</Badge>
		<Badge icon={<LinkedinOutlined />}>{'linkedin.com/in/giovanni-tommasi'}</Badge>
	</Row>
)

export default Contacts