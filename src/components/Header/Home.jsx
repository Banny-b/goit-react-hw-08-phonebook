import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/authorization/authSelectors';
import HeaderSCSS from './Header.module.scss';


const HomeAll = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return (
        <div className={HeaderSCSS.home}>
            <Link to="/" className={HeaderSCSS.link}>&#127968;Home</Link>
            {isLoggedIn &&(<Link to="phonebook" className={HeaderSCSS.link}>&#128214;PhoneBook</Link>)}
        </div>
    )
};

export default HomeAll;