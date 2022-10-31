import React from 'react'
import ReactDOM from 'react-dom/client'

import Icon from './assets/icon.jpg'

import Avatar from './containers/avatar'
import Details from './containers/details'
import Contacts from './containers/contacts'
import Experience from './containers/experience'
import Education from './containers/education'
import Projects from './containers/projects'
import Publications from './containers/publications'
import Thesis from './containers/thesis'
import Passions from './containers/passions'

import Card from './components/card'
import Grid from './components/grid'

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
				<Grid columns='auto auto'>
					<Thesis />
					<Publications />
				</Grid>
				<Grid columns='1fr 0.5fr'>
					<Projects />
					<Education />
				</Grid>
				<Passions />
			</Card>
		</Card>
	</React.StrictMode>
)