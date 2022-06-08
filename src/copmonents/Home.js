
import React from 'react';
import Users from './Users';

const Home = ({ usersWithId }) => {
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