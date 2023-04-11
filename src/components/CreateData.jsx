import { supabase } from "../client"
import '../App.css'

const createChocobo = async (event) => {
    event.preventDefault()

    await supabase
    .from("Chocobo")
    .insert({name: event.target.name.value, color: event.target.color.value, food: event.target.food.value})
    .select()

    window.location.assign('/')

}

const CreateData = () => {
    return(
        <div>
            <form onSubmit={createChocobo}>
                <label for="name">Name</label> <br />
                <input type="text" id="name" name="name" /><br />
                <br/>

                <label for="color">Color</label><br />
                <input type="color" id="color" name="color" /><br />
                <br/>

                <label for="food">Food</label><br />
                <textarea rows="5" cols="50" id="food" name="food">
                </textarea>
                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default CreateData