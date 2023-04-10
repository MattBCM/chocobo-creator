import { supabase } from "../client"
import '../App.css'
import { useParams } from "react-router-dom"

const EditData = (props) => {

    let { id } = useParams()
    const post = props.data.filter(item => item.id == id)[0]
    console.log(post)

    const editChocobo = async (event) => {
        event.preventDefault()
    
    
        await supabase
        .from("Chocobo")
        .update({name: event.target.name.value, color: event.target.color.value, food: event.target.food.value})
        .eq('id', id)
    
        window.location.assign('/')
    
    }

    const deleteChocobo = async () => {
        await supabase
        .from("Chocobo")
        .delete()
        .eq('id', id)

        window.location.assign('/')
    }

    return(
        <div>
            <form onSubmit={editChocobo}>
                <label for="name">Name</label> <br />
                <input type="text" id="name" name="name" defaultValue={post.name}/><br />
                <br/>

                <label for="color">Color</label><br />
                <input type="color" id="color" name="color" defaultValue={post.color}/><br />
                <br/>

                <label for="food">Food</label><br />
                <textarea rows="5" cols="50" id="food" name="food" defaultValue={post.food}>
                </textarea>
                <br/>
                <button type="submit">Edit Chocobo</button>
                <button onClick={deleteChocobo}>Delete Chocobo</button>
            </form>
        </div>
    )
}

export default EditData