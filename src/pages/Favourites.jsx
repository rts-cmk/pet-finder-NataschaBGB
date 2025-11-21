import Header from '../components/Header/Header.jsx'
import Navigation from '../components/Navigation/Navigation.jsx'
import FavouritesDetails from '../components/FavouritesDetails/FavouritesDetails.jsx';


export default function Favorites() {

    return (
        <>
            <Header />

            <main className='pet-finder__favourites'>
                
                <h1>Favourites</h1>

                <FavouritesDetails />
            
            </main>
        
            <Navigation />

        </>
        
    );

}