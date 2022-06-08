import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useUser from './Hooks/useUser';
import Users from './Users';

const Home = ({ usersWithId }) => {
    console.log(usersWithId);
    // const [users, setUsers] = useState([])

    // useEffect(() => {
    //     axios.get('https://randomuser.me/api/?results=10').then(res => setUsers(res.data.results))
    // }, [])
    // console.log(users);
    // const [users]=useUser()
    return (
        <div className=''>
            <div className="overflow-x-auto">
                <table className="table w-3/4 mx-auto" >
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Country</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            usersWithId && usersWithId.map((user, index) => <Users key={user.cell} index={index} user={user}></Users>)
                        }

                    </tbody>
                </table>
            </div >
        </div >
    );
};

export default Home;