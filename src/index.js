import React from 'react'
import ReactDOM from 'react-dom/client'

import Icon from './assets/icon.jpg'

import Contacts from './containers/contacts'
import Details from './containers/details'
import Education from './containers/education'
import Experience from './containers/experience'
import Research from './containers/research'

import Avatar from './components/avatar'
import Card from './components/card'

import './index.css'
import 'antd/dist/antd.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
	<React.StrictMode>
		<Card className='base'>
			<Avatar icon={Icon}/>
			<Details />
			<Card className='main'>
				<Contacts />
				<Experience />
				<Research />
				<Education />
			</Card>
		</Card>
	</React.StrictMode>
)