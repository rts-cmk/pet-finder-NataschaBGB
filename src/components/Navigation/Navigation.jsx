import { Link } from "react-router";

import { CiHome } from "react-icons/ci";
import { IoChatbubbleOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { RxPerson } from "react-icons/rx";

import './Navigation.sass'

export default function Navigation() {

    return (
        <nav className="pet-finder__navigation">
            <Link to={"/"}>
                <CiHome className="pet-finder__navigation-icon shadow" />
            </Link>
            <IoChatbubbleOutline className="pet-finder__navigation-icon shadow" />
            <IoMdHeartEmpty className="pet-finder__navigation-icon shadow" />
            <RxPerson className="pet-finder__navigation-icon shadow" />
        </nav>
    )

}