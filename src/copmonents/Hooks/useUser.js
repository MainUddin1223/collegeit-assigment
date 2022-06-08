import axios from "axios"
import { useEffect, useState } from "react"

const useUser = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get('https://randomuser.me/api/?results=10').then(res => setUsers(res.data.results))
    }, [])
    const usersWithId = users?.map((user, index) => ({
        ...user, userId: index
    }));
    return [ usersWithId]
}
export default useUser