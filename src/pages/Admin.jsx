import { Link } from 'react-router'
import Header from '../components/Header/Header.jsx'
import Navigation from '../components/Navigation/Navigation.jsx'
import AdminAdd from './Admin/AdminAdd.jsx'
import DisplayPets from '../components/DisplayPets/DisplayPets.jsx'


export default function Admin() {

    return (
        <>
            <Header />
            
            <main className='admin'>
                
                <h1>Admin</h1>

                <AdminAdd />

                <DisplayPets />
                
            </main>
        
            <Navigation />
        </>
    )

}