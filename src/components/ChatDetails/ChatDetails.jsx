import { PiChatsCircleBold } from "react-icons/pi";
import { LuTrash } from "react-icons/lu";
import './ChatDetails.sass'


export default function ChatDetails({user_name, chat_title}) {

    return (
        <>   
            <section className='pet-finder__chat shadow'>
                
                <PiChatsCircleBold className="pet-finder__chat-icon" />
            
                <article className='pet-finder__chat-content'>
                    
                    <div className="pet-finder__chat-user">
                        <p>Messages from:</p>
                        <h2>{user_name}</h2>
                    </div>
                    
                    <div className="pet-finder__chat-title">
                        <p>Chat Title:</p>
                        <h3>{chat_title}</h3>
                    </div>

                    <button className="pet-finder__chat-delete">
                        <LuTrash />
                    </button>

                </article>
            </section>  
        </>
    );

}