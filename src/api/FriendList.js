import React from 'react'
import axios from 'axios'
const FriendList = async () => {
    try {
        axios.get(`https://randomuser.me/api/?results=10`)
        .then(res => {
            const data = 'test axios'
            return data
        })
        
    } catch (error) {
        return error
    }
}

export default FriendList