import css from './User.module.css'

export default function Container({ children }) {
    return (
        <>
            <h1 className={css['general-title']}>Список користувачів</h1>
            <div className={css.container}>
                {children}
            </div>
        </>
    )
}