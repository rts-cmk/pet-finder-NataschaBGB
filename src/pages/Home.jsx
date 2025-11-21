import Header from '../components/Header/Header.jsx'
import Filter from '../components/Filter/Filter.jsx'
import HomeDetails from '../components/HomeDetails/HomeDetails.jsx'
import Navigation from '../components/Navigation/Navigation.jsx'


export default function Home() {

    return (
        <section className='pet-finder'>
            <Header />

            <main className='pet-finder__home'>
                <Filter />
                <HomeDetails />
            </main>

            <Navigation />
        </section>
    )

}