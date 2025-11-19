import Header from '../components/Header/Header.jsx'
import Navigation from '../components/Navigation/Navigation.jsx'
import { RiFileDamageLine } from "react-icons/ri";


export default function Error() {

    return (
        <>
            <Header />

            <main className='pet-finder__error'>
                <RiFileDamageLine className='error-icon' />
                <h1>404 Error</h1>
                <p>Oops! It looks like this page is broken or does not exist.</p>
            </main>

            <Navigation />
        </>
    );

}