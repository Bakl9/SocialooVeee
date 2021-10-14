import store from './redux/State'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

let rerenderEntireTree = State => {
	ReactDOM.render(
		<React.StrictMode>
			<App
				State={State}
				dispatch={store.dispatch.bind(store)}
	
			/>
		</React.StrictMode>,
		document.getElementById('root')
	)
}
rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)
