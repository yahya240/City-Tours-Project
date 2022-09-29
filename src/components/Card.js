import { useState } from 'react'
// import img1 from './img/london.jpeg'

const Card = ({id,city,img,name,info,deleteCard})=>{
    const [showinfo,setShowInfo] = useState(false);

    return(
        <div className="card">
            <div className='img-container'>
                <img src={img} alt={name}></img>
                <span className='close-btn' onClick={()=>deleteCard(id)}>
                    <i className='fas fa-window-close'></i>
                </span>
            </div>
            {/* <img src={img1} alt={name}></img> */}
            <div className='info'>
                <h3>{city}</h3>
                <h4>{name}</h4>
                <h5>info <span onClick={()=>setShowInfo(!showinfo)}><i className='fas fa-caret-square-down'></i></span></h5>
                {showinfo && <p>{info}</p>}
            </div>
        </div>
    )
}

export default Card;