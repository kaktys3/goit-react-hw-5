import clsx from 'clsx';
import style from './Gallery.module.css'

const GalaryItem = ({img, title, price, number}) => {
    return(
        <>
        <img src={img} alt="" />
        <h3 className={clsx({
            [style.red]: price >= 500,
            [style.green]: price < 500,
        })}>{title}</h3>
        <p>{price}</p>
        <p>залишилось: {number}</p>
        </>
    )
}


export default function Galary({data}) {
    return(
        <div>
            <h2>Galary</h2>
            {
                data.map(item => (
                    <GalaryItem key={item.id} img={item.url} title={item.title} price={item.price} number={item.quantity}/>
                ))
            }
        </div>
    )
}