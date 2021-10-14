import React from 'react'
import s from './NewPost.module.css'

export default function NewPost(props) {
    return (
        <div>
             <div className={s.new_post}>
                 <div>
                 <img src="https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg" alt="avatar"/>
                 {props.message}
                </div>    
                 <span>like</span>
                 {props.like}
            </div>
        </div>
    )
}
