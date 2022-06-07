import React from 'react';
import { useParams } from 'react-router-dom';

const User = ({users}) => {
    const { email } = useParams();
    const userDetail=users.filter(user=>user?.email===email);
    console.log(userDetail[0]);
    
    return (
        <div>

        </div>
    );
};

export default User;