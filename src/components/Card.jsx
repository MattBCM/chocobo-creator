import "../App.css"
import { Link } from "react-router-dom"


const Card = (props) => {
    return(
        <div className="card" style={{'border': `5px solid ${props.color}`}}>
            <h2>{`Name: ${props.name}`}</h2>
            <img src='./src/assets/chocobo.png' alt="chocobo image"/>
            <h2>{`Color: ${props.color}`}</h2>
            <h2>{`Favorite Food: ${props.food}`}</h2>
            <Link to={`edit/${props.id}`}><button>Edit Chocobo</button></Link>
        </div>
    )
}

export default Card