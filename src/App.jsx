import './App.css'
import Header from './assets/Component/Header/Header'
import Holding from './assets/Component/Holdings/Holding'
import Rescipes from './assets/Component/Rescipes/Rescipes'

function App() {
 

  return (
    <>
    <div className='container ml-10'>
    <Header></Header>
    <div className='flex flex-row justify-between'>
    <Rescipes></Rescipes>
    <Holding></Holding>
    </div>

    </div>
     
    </>
  )
}

export default App
