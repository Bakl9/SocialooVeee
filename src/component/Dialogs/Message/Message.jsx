import React from 'react'
import s from './Message.module.css'

export default function message(props) {

	

	return (
		<div className={s.wrapper_message}>
			<div className={s.message}>{props.message}</div>
			<div>
		

			</div>
		</div>
	)
}
