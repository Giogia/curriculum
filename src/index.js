import React from 'react'
import ReactDOM from 'react-dom/client'
import { StarOutlined } from '@ant-design/icons'

import reportWebVitals from './reportWebVitals'
import './index.css'
import Card from './components/card'
import Badge from './components/badge'
import Title from './components/title'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render( 
	<React.StrictMode>
		<Card className='base'>
			<Title className='name' text='Giovanni' />
			<Card className='main'>
				<Badge icon={<StarOutlined/>}>{'badge'}</Badge>
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