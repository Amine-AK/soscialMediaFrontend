import React from 'react'
import axios from 'axios'

const PostList = () => {

    try {
        axios.post(`https://dummyapi.io/data/v1/user`)
        .then(res => {
            const data = res.data
        })
        return data
    } catch (error) {
        return error
    }
    
  
}

export default PostList