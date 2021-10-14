const Update_Post = 'UPRATE-NEW-POST-TEXT'
const Add_Post = 'ADD-POST'
const UPDATE_MESSAGE = 'UPDATE-MESSAGE'
const SEND_MESSAGE = 'SEND-MESSAGE'

let store = {
	rerenderEntireTree() {},

	_state: {
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
		postData: [
			{ id: 1, like: 1, message: 'hello' },
			{ id: 2, like: 24, message: 'hello' },
			{ id: 3, like: 56, message: 'hello' },
			{ id: 4, like: 109, message: 'hello' },
		],
		newPostText: 'ss',
		newMessageBody: ''
	}, 
	
	getState() {
		return this._state
	},

	subscribe(obserbver) {
		this.rerenderEntireTree = obserbver
	},

	dispatch(action) {
		if (action.type === Add_Post) {
			let newPost = {
				id: 0,
				message: this._state.newPostText,
				like: 1,
			}
			this._state.postData.push(newPost)
			this._state.newPostText = ''
			this.rerenderEntireTree(this._state)
		} else if (action.type === Update_Post) {
			this._state.newPostText = action.newText
			this.rerenderEntireTree(this._state)
		} else if (action.type === UPDATE_MESSAGE) {
			this._state.newMessageBody = action.body 
			this.rerenderEntireTree(this._state)
		} else if (action.type === SEND_MESSAGE) {
			let body = this._state.newMessageBody;
			this._state.newMessageBody = ''
			this._state.messageData.push({ message: body, id: 5 })
			this.rerenderEntireTree(this._state)
		}
	},     // 17:15   
}

export const AddPost = () => ({ type: Add_Post })

export const UpdateNewPosttext = text => ({
	type: Update_Post,
	newText: text,
})

export const sentMessageCreate = () => ({type: SEND_MESSAGE})
export const updateNewMeassageBody = body => ({type: UPDATE_MESSAGE, body: body})

export default store
