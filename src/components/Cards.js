import Card from './Card'
import {tourData} from '../tourData'
import { useState } from 'react'

const Cards = ()=>{

    const [data,setData] = useState(tourData);


    const deleteCard = (id)=>{
        const newData = data.filter((one)=> one.id !== id)
        setData(newData)
    }

    return(
        <div className='card-list'>
        {data.map((one)=>{
            return <Card key={one.id} {...one} deleteCard={deleteCard}/>
        })}
        </div>
    )
}

export default Cards;