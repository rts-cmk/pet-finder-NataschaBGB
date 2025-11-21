import Header from '../components/Header/Header.jsx'
import Navigation from '../components/Navigation/Navigation.jsx'
import ChatDetails from '../components/ChatDetails/ChatDetails.jsx'


export default function Dogs() {

    return (
        <>
            <Header />

            <main className='pet-finder__chats'>

                <h1>Chats</h1>
        
                <ChatDetails user_name="Natascha" chat_title="Snack Squad"/>
                <ChatDetails user_name="Tommy" chat_title="Unsolicited Opinions"/>
                <ChatDetails user_name="Lene" chat_title="No Plans, Just Vibes"/>
                <ChatDetails user_name="Scott" chat_title="Certified Clown Crew"/>
                <ChatDetails user_name="Line" chat_title="Drama-Free (lol)"/>
                <ChatDetails user_name="Sandra" chat_title="Zero Filter Zone"/>
            
            </main>

            <Navigation />
        </>
    )

}