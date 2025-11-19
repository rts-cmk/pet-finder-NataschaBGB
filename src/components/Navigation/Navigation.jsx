import { NavLink } from "react-router";

import { CiHome } from "react-icons/ci";
import { IoChatbubbleOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { RxPerson } from "react-icons/rx";

import './Navigation.sass'


export default function Navigation() {
    
    return (

        <nav className="pet-finder__navigation">

            <NavLink 
                to="/" 
                className={({ isActive }) =>
                `pet-finder__navigation-icon ${isActive ? "pet-finder__navigation-icon--active" : "shadow"}`
                }
                end
            >
                <CiHome />
            </NavLink>

            <NavLink 
                to="/chat" 
                className={({ isActive }) =>
                `pet-finder__navigation-icon ${isActive ? "pet-finder__navigation-icon--active" : "shadow"}`
                }
            >
                <IoChatbubbleOutline />
            </NavLink>

            <NavLink 
                to="/favorites" 
                className={({ isActive }) =>
                `pet-finder__navigation-icon ${isActive ? "pet-finder__navigation-icon--active" : "shadow"}`
                }
            >
                <IoMdHeartEmpty />
            </NavLink>

            <NavLink 
                to="/profile" 
                className={({ isActive }) =>
                `pet-finder__navigation-icon ${isActive ? "pet-finder__navigation-icon--active" : "shadow"}`
                }
            >
                <RxPerson />
            </NavLink>

        </nav>

    );
}