
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './Components/Sidebar'
import Navbar from './Components/Navbar'
import Body from './Components/Body'
import Right from './Components/Right'
import Alert from './Components/Alert'

function App() {
  

  return (
    <>
    <Alert />
    <Navbar />
   
    <Sidebar />
    <Body />
    <Right />
    </>
  )
}

export default App
