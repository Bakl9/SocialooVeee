import React from 'react'
import s from './Post.module.css'
import NewPost from './NewPost/NewPost'
import { AddPost, UpdateNewPosttext } from '../../../redux/State'

export default function Post(props) {
	const Postinfo = props.State.postData.map(p => (
		<NewPost like={p.like} message={p.message} />
	))

	let newPostElement = React.createRef()

	let postClick = () => {
		props.dispatch(AddPost())
	}

	let onPostChange = () => {
		let text = newPostElement.current.value
		props.dispatch(UpdateNewPosttext(text))
	}

	return (
		<div>
			<div className={s.post}></div>
			<textarea
				onChange={onPostChange}
				ref={newPostElement}
				value={props.newPostText}
			></textarea>
			<button onClick={postClick}>добавить</button>
			{Postinfo}
			{/* <NewPost like={postData[0].like} message={postData[0].message} /> */}
		</div>
	)
}
