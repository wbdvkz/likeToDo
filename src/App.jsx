
import { useEffect, useState } from 'react'
import './App.css'
import Adder from './Components/Adder'
import List from './Components/List'

function App() {

    const [toDoArray, setToDoArray] = useState([])

    useEffect(() => {

        async function loadData() {
            let res = await fetch('https://virtserver.swaggerhub.com/LOL11999333/Planner/1.0.0/findAllForecastPlanerItems', {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json'
                }
            })

            let data = await res.json()

            setToDoArray(data)


        }

        loadData()

        return () => {
            // Cleanup function
        }
    }, [])

    return (
        <div className="App w-screen grid place-items-center">
            <div className='text-8xl'>Планировщик</div>

            <br /><br /><br /><br /><br /><br />

            <List toDoArray={toDoArray} setToDoArray={setToDoArray} />

            <br /><br /><br /><br /><br /><br />

            <Adder setToDoArray={setToDoArray} />

            <br /><br /><br /><br /><br /><br />
        </div>
    )
}

export default App
