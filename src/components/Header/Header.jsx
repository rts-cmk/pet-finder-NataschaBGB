// import { useLoaderData } from "react-router";

import profile from '../../assets/images/profile.png'
import { MdLocationOn } from "react-icons/md";
import { BsChevronDown } from "react-icons/bs";

import { IoNotificationsOutline } from "react-icons/io5";

import './Header.sass'

export default function Header() {

    // const user = useLoaderData();
    // console.log(user);

    return (
        <header className="pet-finder__header">
            <section className="pet-finder__header-profile">
                <img src={profile} alt="pet-finder_profile_image" className='header-image'/>
                <div className="header-location">
                    <MdLocationOn className="location-icon" />
                    <p className="pet-finder__header-location">city</p>
                    <BsChevronDown className="arrow-icon" />
                </div>
            </section>
            
            <IoNotificationsOutline className="notification-icon" />
        </header>
    )

}