import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

const ProfileData = (props) => {
    const { id } = useParams()
    const prop = props.data.filter(item => item.id == id)[0]
    console.log(prop)

    return(
        <div className="profileContainer">
            <h1>{`Name: ${prop.name}`}</h1>
            <img src='../src/assets/chocobo.png' alt="" style={{'border': `5px solid ${prop.color}`}}/>
            <h2 style={{'color': prop.color}}>Chocobo is this Color!</h2>
            <h2>{`Favorite Food: ${prop.food}` }</h2>
        </div>

    )
}

export default ProfileData