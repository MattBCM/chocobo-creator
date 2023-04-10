import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'
import {useRoutes, Link} from 'react-router-dom'
import { supabase } from './client'
import ReadData from './components/ReadData'
import CreateData from './components/CreateData'
import EditData from './components/EditData'


function App() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchCocobos = async () => {
      const {data} = await supabase
      .from('Chocobo')
      .select()

      setPosts(data)
    }

    fetchCocobos()
  },[])

  let element = useRoutes([
    {
      path: "/",
      element: <ReadData data={posts} />
    },
    {
      path: "/new",
      element: <CreateData/>
    },
    {
      path: '/edit/:id',
      element: <EditData data={posts}/>
    }
  ])

  return (
    <div className="container">
      <h1>Chocobo Creator</h1>
      <h2>Application that allows you to create many chocobos and view others</h2>
      {element}
    </div>
  )
}

export default App
