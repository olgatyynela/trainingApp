import './App.css'
import { Outlet } from 'react-router-dom'
import { Navigation } from './components/Navigation'

function App() {
    return (
        <div>
            <Navigation />
            {/* Outlet kertoo että halutaan renderöidä tässä aktiivisen polun komponentti */}
            <Outlet />
        </div>
    )
}

export default App
