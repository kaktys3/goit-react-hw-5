import styled from 'styled-components'
import { LuAlarmClock } from "react-icons/lu";
import { FaFireAlt } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa";
import clsx from 'clsx';
import css from './reception.module.css'
import { useState } from 'react';
function Img() {
    return <LuAlarmClock style={{ width: '24px', height: '24px' }} />
}



const ReceptCard = styled.div`
    width:23%;
    display: flex;
    flex-direction: column;
        align-items: center;
        gap: 10px;
        padding:0px 0px 100px;
`

const Name = styled.p`
font-weight: 700;
    font-size: 15px;
`

const ImageRecept = styled.img`
width: 90%;
aspect-ratio: 10/9;
border-radius: 20px;
`

const ContainerDescription = styled.div`
    display: flex;
        justify-content: center;
        padding:15px 30px;
        gap:10px;
        background-color: white;
        width:100%;
        border-radius: 100px
`

const Description = styled.p`
font-weight: 500;
    font-size: 12px;
    color:gray;
`

const ContainerDescriptionElem = styled.div`
    display: flex;
            align-items: center;
            gap: 5px;
`

const ContainerSizeMenu = styled.div`
            background-color: white;
                display: flex;
    flex-direction: column;
        align-items: center;
        gap:20px;
        padding: 15px 30px 30px 15px;
        border-radius:20px;
`

const ContainerSizeMenuTitle = styled.p`
font-weight: 700;
    font-size: 17px;
`

const ContainerSize = styled.div`
                display: flex;
                        justify-content: center;
                        gap:10px;
`

const ContainerSizeElem = styled.button`
border:0px;
border-radius:100px;
padding: 5px 10px 10px;
`

export default function Recepts({ img, name, time, servings, calories }) {
    const [number, colors] = useState(0)
    return (
        <>
            <ReceptCard>
                <ImageRecept className={clsx({[css.trancperency]: number === 3 })} src={img} alt="" ></ImageRecept>
                <Name>{name}</Name>
                <ContainerDescription>
                    <ContainerDescriptionElem>{Img()}<Description>{time} min</Description></ContainerDescriptionElem>
                    <ContainerDescriptionElem><FaChartPie style={{ width: '20px', height: '20px' }} /><Description>{servings} servings</Description></ContainerDescriptionElem>
                    <ContainerDescriptionElem><FaFireAlt style={{ width: '20px', height: '20px' }} /><Description>{calories} calories</Description></ContainerDescriptionElem>
                </ContainerDescription>

                <ContainerSizeMenu>
                    <ContainerSizeMenuTitle>Difficulty</ContainerSizeMenuTitle>
                    <ContainerSize>
                        <ContainerSizeElem onClick={() => { colors(0) }} className={clsx(css.background,{ [css.color]: number === 0 })}>Easy</ContainerSizeElem>
                        <ContainerSizeElem onClick={() => { colors(1) }} className={clsx(css.background,{ [css.color]: number === 1 })}>Medium</ContainerSizeElem>
                        <ContainerSizeElem onClick={() => { colors(3) }} className={clsx(css.background,{ [css.color]: number === 3 })}>Hard</ContainerSizeElem>
                        {console.log(number)}
                    </ContainerSize>
                </ContainerSizeMenu>
            </ReceptCard>
        </>
    )
} 