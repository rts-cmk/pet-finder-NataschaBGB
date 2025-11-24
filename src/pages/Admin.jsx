import Header from '../components/Header/Header.jsx'
import Navigation from '../components/Navigation/Navigation.jsx'
import SubmitNewDog from '../components/SubmitNewDog/SubmitNewDog.jsx'


export default function Admin() {

    return (
        <>
            <Header />
            
            <main className='pet-finder__admin'>
                
                <h1>Admin</h1>

                <SubmitNewDog />
            
            </main>
        
            <Navigation />
        </>
    )

}