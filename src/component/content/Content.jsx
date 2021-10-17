import React from 'react'
import s from './Content.module.css'
import Post from './post/Post'

export default function Content(props) {

	return (
		<div className={s.content}>
			<div>
				<img
					className={s.img}
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf1WI2hziPDHpkDeFIjtxC86g6P3oO9YrSAQ&usqp=CAU"
					alt="abstraction"
				/>
			</div>
			<Post
				dispatch={props.dispatch}
				store={props.store}
				state={props.state}
			/>
		</div>
	)
}
