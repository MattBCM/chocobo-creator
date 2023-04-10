import React, { useState, useEffect } from 'react';
import Card from './Card';
import '../App.css'
import { Link } from 'react-router-dom';

const ReadData = (props) =>{
    
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts(props.data);
    }, [props]);

    return (
        <div>
            <Link to='/new'><button>Create Chocobo</button></Link>
        <div className="ChocoboPosts">
            {
                posts && posts.length > 0 ?
                posts.map((post,index) => 
                   <Card id={post.id} name={post.name} color={post.color} food={post.food}/>
                ) : <h2>{'No Chocobos Yet 😞'}</h2>
            }
        </div> 
        </div>
    )
}

export default ReadData