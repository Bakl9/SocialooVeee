import { Profile_Redux } from './PRO_Redux'

const UPDATE_POST = 'UPRATE-NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'
const UPDATE_MESSAGE = 'UPDATE-MESSAGE'
const SEND_MESSAGE = 'SEND-MESSAGE'

let store = {
	rerenderEntireTree() {
		console.log('Dspjd aeyrwbb')
	},

	_state: {
		messagePage: {
			peopleDate: [
				{ name: 'John', id: 1 },
				{ name: 'Sool', id: 2 },
				{ name: 'Vinny', id: 3 },
				{ name: 'Vikki', id: 4 },
			],
			messageData: [
				{ message: 'hello', id: 1 },
				{ message: 'hello', id: 2 },
				{ message: 'hello', id: 3 },
				{ message: 'hello', id: 4 },
				{ message: 'hello', id: 4 },
			],
			newMessageBody: '',
		},
		profile_Page: {
			postData: [
				{ id: 1, like: 1, message: 'hello' },
				{ id: 2, like: 24, message: 'hello' },
				{ id: 3, like: 56, message: 'hello' },
				{ id: 4, like: 109, message: 'hello' },
			],
		},

		newPostText: 'ss',
	},

	getState() {
		return this._state
	},

	subscribe(obserbver) {
		this.rerenderEntireTree = obserbver
	},

	dispatch(action) {
		this._state.profile_Page = Profile_Redux(this._state.profile_Page,action)
			this.rerenderEntireTree(this._state)
			if (action.type === Update_Post) {
			this._state.newPostText = action.newText
			this.rerenderEntireTree(this._state)
			if (action.type === UPDATE_MESSAGE) {
				this._state.newMessageBody = action.body
				this.rerenderEntireTree(this._state)
			} else if (action.type === SEND_MESSAGE) {
				let body = this._state.newMessageBody
				this._state.newMessageBody = ''
				this._state.message_page.messageData.push({ message: body, id: 5 })
				this.rerenderEntireTree(this._state)
			}
		} // 17:15
	},
}


export const AddPost = () => ({ type: ADD_POST })
export const UpdateNewPosttext = text => ({ type: UPDATE_POST,newText: text,})

export const sentMessageCreate = () => ({ type: SEND_MESSAGE })
export const updateNewMeassageBody = body => ({ type: UPDATE_MESSAGE,body: body,})

export default store;
window.store = store;
