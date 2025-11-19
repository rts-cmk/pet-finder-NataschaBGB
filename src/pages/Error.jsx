import Header from '../components/Header/Header.jsx'
import Navigation from '../components/Navigation/Navigation.jsx'

export default function Error() {

    return (
        <>
            <Header />
            
            <div>
                <h2>404 Error</h2>
                <p>Oops! The page you're looking for does not exist.</p>
            </div>

            <Navigation />
        </>
    );

}