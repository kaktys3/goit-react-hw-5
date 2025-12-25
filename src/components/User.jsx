import clsx from 'clsx';
import css from './User.module.css'

const User = ({ name, age, city, img, isStudent}) => {
    return (
        <div className={css['user-box']}>
            <img className={css.img} src={img} alt="" />
            <h2 className={clsx(css.title, isStudent && css.green)}>Користувач: {name}</h2>
            <p className={clsx(css.age, isStudent && css.green)}>Вік: {age}</p>
            <p className={css.city}>Місто: {city}</p>
        </div>
    )
}

export default function UserList({ userArr }) {
    return (
        <>
            {
                userArr.map(user => (
                    <User isStudent={user.isStudent} name={user.name} age={user.age} city={user.address.city} img={'https://thumbs.dreamstime.com/b/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80-%D0%B7%D0%BD%D0%B0%D1%87%D0%BA%D0%B0-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8F-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D1%8B-%D0%BF%D0%BE-%D1%83%D0%BC%D0%BE%D0%BB%D1%87%D0%B0%D0%BD%D0%B8%D1%8E-%D1%84%D0%BE%D1%82%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D0%B8-%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D0%B5%D0%B9-183042379.jpg'}/>
                ))
            }
        </>
    )
}