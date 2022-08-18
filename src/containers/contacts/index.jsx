import React from 'react'
import { PhoneOutlined, MailOutlined, GithubOutlined, LinkedinOutlined } from '@ant-design/icons'

import Badge from '../../components/badge'

import './index.css'

const Contacts = () => (
	<div className='contacts' >
		<Badge icon={<PhoneOutlined />}>{'3924004397'}</Badge>
		<Badge icon={<MailOutlined />}>{'giovannitommasi95@gmail.com'}</Badge>
		<Badge icon={<GithubOutlined />}>{'@Giogia'}</Badge>
		<Badge icon={<LinkedinOutlined />}>{'linkedin.com/in/giovanni-tommasi'}</Badge>
	</div>
)

export default Contacts