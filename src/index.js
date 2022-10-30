import React from 'react'
import ReactDOM from 'react-dom/client'

import Icon from './assets/icon.jpg'

import Contacts from './containers/contacts'
import Details from './containers/details'
import Education from './containers/education'
import Experience from './containers/experience'
import Projects from './containers/projects'
import Publications from './containers/publications'
import Thesis from './containers/thesis'

import Avatar from './components/avatar'
import Card from './components/card'

import './index.css'
import 'antd/dist/antd.css'
import Grid from './components/grid'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
	<React.StrictMode>
		<Card className='base'>
			<Avatar icon={Icon} />
			<Details />
			<Card className='main'>
				<Contacts />
				<Experience />
				<Grid columns='auto auto'>
					<Thesis />
					<Publications />
				</Grid>
				<Grid columns='1fr 0.5fr'>
					<Projects />
					<Education />
				</Grid>
			</Card>
		</Card>
	</React.StrictMode>
)