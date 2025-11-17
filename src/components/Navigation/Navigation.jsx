import { Link } from "react-router";

import { CiHome } from "react-icons/ci";
import { IoChatbubbleOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { RxPerson } from "react-icons/rx";

import './Navigation.sass'

export default function Navigation() {

    return (
        <section className="pet-finder__navigation">
            <Link to={"/"}>
                <CiHome className="pet-finder__navigation-icon home" />
            </Link>
            <IoChatbubbleOutline className="pet-finder__navigation-icon chat" />
            <IoMdHeartEmpty className="pet-finder__navigation-icon heart" />
            <RxPerson className="pet-finder__navigation-icon profile" />
        </section>
    )

}