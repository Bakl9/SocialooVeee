import React from 'react'
import s from './NavBar.module.css'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
	return (
		<div className={s.nav}>
			<div className={s.bar}>
				<div className={s.links}>
					<img className={s.img} src="img/user.svg" alt="img" />
					<NavLink className={s.links} to="/Profile">
						Профиль
					</NavLink>
				</div>
				<div className={s.links}>
					<img className={s.img} src="img/email.svg" alt="img" />
					<NavLink className={s.links} to="/Message">
						Сообщения
					</NavLink>
				</div>
				<div className={s.links}>
					<img className={s.img} src="img/image.svg" alt="img" />
					<NavLink className={s.links} to="#">
						Фото
					</NavLink>
				</div>
				<div className={s.links}>
					<img className={s.img} src="img/musical-note.svg" alt="img" />
					<NavLink className={s.links} to="#">
						Музыка
					</NavLink>
				</div>
				<div className={s.links}>
					<img className={s.img} src="img/settings.svg" alt="img" />
					<NavLink className={s.links} to="#">
						Настройки
					</NavLink>
				</div>
				<div className={s.links}>
					<img className={s.img} src="img/settings.svg" alt="img" />
					<NavLink className={s.links} to="#">
						Друзья
					</NavLink>
				</div>
			</div>
			<div className={s.Freind}>
				<div className={s.box}>
					<div>
						{/* <img
							className={s.img_friend}
							// src="https://klike.net/uploads/posts/2019-03/1551511784_4.jpg"
						/> */}
					</div>
					<div>
						<NavLink to="Olya" className={s.links_friend}>
							Olya
						</NavLink>
					</div>
				</div>
				<div>
					{/* <img
						className={s.img_friend}
						// src="https://klike.net/uploads/posts/2019-03/1551511784_4.jpg"
					/> */}
					<NavLink to="Masha" className={s.links_friend}>
						Masha
					</NavLink>
				</div>
				<div>
					{/* <img
						className={s.img_friend}
						// src="https://klike.net/uploads/posts/2019-03/1551511784_4.jpg"
					/> */}
					<NavLink to="Masha" className={s.links_friend}>
						Mariya
					</NavLink>
				</div>
			</div>
		</div>
	)
}
