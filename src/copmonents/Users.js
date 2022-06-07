import React from 'react';
import { Link} from 'react-router-dom';

const Users = ({ user, index }) => {
    const { name, gender, location, email } = user;
    const { city, state, country } = location;
    const fullName = `${name.title} ${name.first} ${name.last}`

    return (
        <Link to={`/user/${email}`} >
            <tr class="hover" >
                <th>{index + 1}</th>
                <td>{fullName}</td>
                <td>{gender} </td>
                <td>{city}</td>
                <td>{state}</td>
                <td>{country}</td>
            </tr>
        </Link>
    );
};

export default Users;