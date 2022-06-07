import axios from "axios"
import { useEffect, useState } from "react"

const useUser = () => {
    const [users, setUsers] = useState()
    useEffect(() => {
        axios.get('https://randomuser.me/api/?results=10').then(res => setUsers(res.data.results))
    }, [])
    console.log('hello',users,'');
    return [users]
}
export default useUser