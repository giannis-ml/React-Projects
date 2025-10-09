import SecondComponent from './SecondComponent.jsx';
import ThirdComponent from './ThirdComponent.jsx';
import { UserProvider } from './Include.jsx';
import './App.css';

function App() {

    return (
        <>
            <FirstComponent />
        </>
    )
}

function FirstComponent() {
    const  user = "Panos"
    const surName = "mpourdoulis"
    return (
        <div>
            <UserProvider value={{ user, surName }}>
                <h1>Hello {user}!</h1>
                <SecondComponent />
                <ThirdComponent />
            </UserProvider>
        </div>
    )
}

export default App;
