import React from 'react';
import { Link, useNavigate} from 'react-router-dom';

const Users = ({ user, index }) => {
    const navigate=useNavigate()
    const { name, gender, location, email,userId } = user;
    const { city, state, country } = location;
    const fullName = `${name.title} ${name.first} ${name.last}`

const handleUserInfo=()=>{
    navigate(`/user/${userId}`)
}

    return (
  
            <tr class="hover" onClick={handleUserInfo}>
                   
                <th>{index + 1}</th>
                <td>{fullName}</td>
                <td>{gender} </td>
                <td>{city}</td>
                <td>{state}</td>
                <td>{country}</td>
            </tr>
      
    );
};

export default Users;