import React from 'react'
import s from './Dialogs.module.css'
import People from './people/People'
import Message from './Message/Message'
import { updateNewMeassageBody, sentMessageCreate } from '../../redux/State'

	export default function Dialogs(props) {



const state = props.store.getState().state

const MessageItem = state.messageData.map(name => (<Message message={name.message} id={name.id} />))
const PeopleItem = state.peopleDate.map(people => (<People name={people.name} id={people.id} />))

const newMessageBody = state.newMessageBody

	const MessagePush = () => {
		props.store.State.dispatch(sentMessageCreate())
	}

	const newMessageChenge = (e) => {
		const body = e.target.value
		props.store.dispatch(updateNewMeassageBody(body))
	}

	return (
		<div>
			<div className={s.dialog}>
				<div className={s.People}>{PeopleItem}</div>
				<div className={s.Message}>{MessageItem}</div>
				<div>
					<div>
						<button onClick={MessagePush}>Send</button>
					</div>
					<div>
						<textarea
							onChange={newMessageChenge}
							value={newMessageBody}
							placeholder="enter your message"
						></textarea>
					</div>
				</div>
			</div>
		</div>
	)
}
