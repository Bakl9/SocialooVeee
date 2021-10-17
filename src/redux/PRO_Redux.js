const Update_Post = 'UPRATE-NEW-POST-TEXT'
const Add_Post = 'ADD-POST'

export const Profile_Redux = (action, state) => {
    switch(action.type) {
        case Add_Post:
            let newPost = {
                id: 0,
                message: state.newPostText,
                like: 1,
            }
            state.postData.push(newPost)
            state.newPostText = ''
            return state 
            case Update_Post:
                this._state.newPostText = action.newText
                return state 
                default:
                    return state 

    }   
}