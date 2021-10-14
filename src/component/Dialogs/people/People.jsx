import React from 'react'
import s from './People.module.css'
import { NavLink } from 'react-router-dom'



export default function People(props) {
	return (
		<div className={s.Wrapper_people}>
            <img className={s.img} src="img/lightbulb.svg" alt="" />
			<NavLink to={"/Message/" + props.id} className={s.people}>
				{props.name}
			</NavLink>
		</div>
	)
}
