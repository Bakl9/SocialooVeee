import React from 'react'
import s from './Dialogs.module.css'
import People from './people/People'
import Message from './Message/Message'

export default function Dialogs(props) {

  

	const MessageItem = props.State.messageData.map(name => (
		<Message message={name.message} id={name.id} />
	))
	const PeopleItem = props.State.peopleDate.map(people => (
		<People name={people.name} id={people.id} />
	))

	return (
		<div>
			<div className={s.dialog}>
				<div className={s.People}>{PeopleItem}</div>
				<div className={s.Message}>{MessageItem}</div>
			</div>
		</div>
	)
}
