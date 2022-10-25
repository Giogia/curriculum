import React from 'react'
import ReactDOM from 'react-dom/client'

import Icon from './assets/icon.jpg'

import Contacts from './containers/contacts'
import Details from './containers/details'
import Education from './containers/education'
import Experience from './containers/experience'
import Research from './containers/research'
import Publications from './containers/publications'

import Avatar from './components/avatar'
import Card from './components/card'

import './index.css'
import 'antd/dist/antd.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
	<React.StrictMode>
		<Card className='base'>
			<Avatar icon={Icon} />
			<Details />
			<Card className='main'>
				<Contacts />
				<Experience />
				<div style={{ display: 'flex', height: 'fit-content', width: '100%' }}>
					<Research />
					<div style={{ display: 'flex', flexDirection: 'column', height: 'fit-content' }}>
						<Education />
						<Publications />
					</div>
				</div>
			</Card>
		</Card>
	</React.StrictMode>
)