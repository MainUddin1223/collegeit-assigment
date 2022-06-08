import React from 'react';
import { useParams } from 'react-router-dom';

const User = ({ usersWithId }) => {
    const { userId } = useParams();

    const userDetail = usersWithId.filter(user => user?.userId === parseInt(userId));
    const userInfo = userDetail[0]
    const email = userInfo?.email
    const dob = userInfo?.dob
    const picture = userInfo?.picture
    const name = userInfo?.name;
    const phone = userInfo?.phone
    const fullName = `${name?.title} ${name?.first} ${name?.last}`
    const dateOfBirth = dob?.date.split("T")[0]
    const birthday = dateOfBirth?.split('-')
    let daysLeft
    if (dateOfBirth) {
        const birthMonth = parseInt(birthday[1]);
        const date = parseInt(birthday[2])
        const today = new Date();
        let bDay = new Date(today.getFullYear(),birthMonth-1,date );
        if (today.getTime() > bDay.getTime()) {
            bDay.setFullYear(bDay.getFullYear() + 1)
        }
        const diff = bDay.getTime() - today.getTime();
        daysLeft = Math.floor(diff / (1000 * 60 * 60 * 24))
    }


    if (userDetail[0] === undefined || birthday === undefined) {
        return <h1>Loading</h1>
    }
    return (
        <div className='md:w-3/4 md:mx-auto m-8 min-h-screen'>
            <div className='flex items-center'>
                <img src={picture?.large} alt="" className='w-64' />
                <div className='mx-4'>
                    <h1>{fullName}</h1>
                    <p>{phone}</p>
                    <p> {email}</p>
                    <p>{dateOfBirth}</p>
                </div>
            </div>


        </div>
    )
};

export default User;