import Header from '../components/Header/Header.jsx'
import Filter from '../components/Filter/Filter.jsx'
import Dog from '../components/Dog/Dog.jsx'
import Navigation from '../components/Navigation/Navigation.jsx'


export default function Dogs() {

    return (
        <section className='pet-finder'>
            <Header />

            <main className='pet-finder__dogs'>
                <Filter />
                <Dog />   
            </main>

            <Navigation />
        </section>
    )

}