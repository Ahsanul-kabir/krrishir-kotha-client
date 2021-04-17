import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Sidebar.css'
import logo from "../../../resources/images/logos/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faList, faCommentDots, faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faListAlt } from '@fortawesome/free-regular-svg-icons';
import { UserContext } from '../../../App';
import { serverURL } from '../../../Settings';

const Sidebar = () => {
    const { name } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [adminTemplate, setAdminTemplate] = useState('');
    const [admin, setAdmin] = useState(false);
    let [admins, setadmins] = useState([])
    // console.log(useContext(UserContext))

    useEffect(() => {
        if (admin) {
            setAdminTemplate(<><li>
                <Link to="/addservice" className="text-dark">
                    <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                </Link>
            </li>
                <li>
                    <Link to="/makeadmin" className="text-dark">
                        <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                    </Link>
                </li>
                <li>
                    <Link to="/service" className="text-dark">
                        <FontAwesomeIcon icon={faList} /> <span>Manage Service</span>
                    </Link>
                </li></>)
        } else {
            setAdminTemplate(<> <li>
                <Link to="/home" className="text-dark">
                    <img className="img-fluid w-50 ml-5" src={logo} alt="" />
                </Link>
            </li>
                <li>
                    <Link to="/order/:`${name}`" className="text-dark">
                        <FontAwesomeIcon icon={faCartPlus} /> <span>Order</span>
                    </Link>
                </li>
                <li>
                    <Link to="/review" className="text-dark">
                        <FontAwesomeIcon icon={faCommentDots} /> <span>Review</span>
                    </Link>
                </li>
                <li>
                    <Link to="/servicedetails" className="text-dark">
                        <FontAwesomeIcon icon={faListAlt} /> <span>Service List</span>
                    </Link>
                </li></>)
        }
        return () => { }
    }, [admin])

    useEffect(() => {
        fetch(serverURL + '/admins').then(data => data.json()).then(adminsJson => { setadmins(adminsJson) })
        return () => {

        }
    }, [])

    useEffect(() => {
        console.log({ admins })
        for (let admin of admins) {
            console.log({ admin, loggedInUser })
            if (admin.email === loggedInUser.email) {
                console.log("YES ADMIN")
                setAdmin(true)
            }
        }
        return () => { }
    }, [loggedInUser, admins])

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-12 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                {adminTemplate}
            </ul>
        </div>
    );
};

export default Sidebar;