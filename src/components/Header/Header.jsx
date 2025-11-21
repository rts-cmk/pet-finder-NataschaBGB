import { useLoaderData } from "react-router";

import { MdLocationOn } from "react-icons/md";
import { BsChevronDown } from "react-icons/bs";

import { IoNotificationsOutline } from "react-icons/io5";

import './Header.sass'

export default function Header() {

    const data = useLoaderData();

    return (
        <header className="pet-finder__header">
            <section className="pet-finder__header-profile">
                <img src={`.${data['user'].image}`} alt="pet-finder_profile_image" className='header-image shadow'/>
                <div className="header-location">
                    <MdLocationOn className="location-icon" />
                    <p className="pet-finder__header-location">{data['user'].location}</p>
                    <BsChevronDown className="arrow-icon" />
                </div>
            </section>
            
            <IoNotificationsOutline className="notification-icon shadow" />
        </header>
    )

}