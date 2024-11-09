import { useState } from 'react'
import './App.css'
import Header from './assets/Component/Header/Header'
import Holding from './assets/Component/Holdings/Holding'
import Rescipes from './assets/Component/Rescipes/Rescipes'

function App() {
 const [recipeses,setrecipeses] = useState([]);

 const handleclick1=recipe=>{
  const newrecipes=[...recipeses,recipe];
  setrecipeses(newrecipes);
 }


 
  return (
    <>
    <div className='container ml-10'>
    <Header></Header>
    <div className='flex flex-row justify-between gap-10 mt-20'>
    <Rescipes handleclick1={handleclick1}></Rescipes>
    <Holding recipeses={recipeses} ></Holding>
    </div>

    </div>
     
    </>
  )
}

export default App
