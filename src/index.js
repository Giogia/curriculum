import React from 'react'
import ReactDOM from 'react-dom/client'
import { PhoneOutlined, MailOutlined, GithubOutlined, LinkedinOutlined } from '@ant-design/icons'

import reportWebVitals from './reportWebVitals'

import Avatar from './components/avatar'
import Card from './components/card'
import Badge from './components/badge'
import Title from './components/title'

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render( 
	<React.StrictMode>
		<Card className='base'>
			<Avatar />
			<div className='details'>
				<Title className='name' text='Giovanni Tommasi' />
				<span className = 'job' >{'Software Engineer'}</span>
			</div>
			<Card className='main'>
				< div className = 'contacts' >
					<Badge icon={<PhoneOutlined/>}>{'3924004397'}</Badge>
					<Badge icon={<MailOutlined/>}>{'giovannitommasi95@gmail.com'}</Badge>
					<Badge icon={<GithubOutlined/>}>{'@Giogia'}</Badge>
					<Badge icon={<LinkedinOutlined/>}>{'linkedin.com/in/giovanni-tommasi'}</Badge>
				</div>
				<Card className = 'secondary' title = 'Experience' > 
					<Card className = 'tertiary' title = 'Mia Platform' > 
						{'test'} 
					</Card>
					<Card className = 'tertiary' title = 'Helmate' > 
						{'test'} 
					</Card>
				</Card>
				<Card className = 'secondary' title = 'Education' > 
					{'test'} 
				</Card>
			</Card>
		</Card>
	</React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()